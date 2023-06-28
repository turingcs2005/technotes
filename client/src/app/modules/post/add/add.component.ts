import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { UntypedFormGroup, FormBuilder, Validators, UntypedFormArray } from '@angular/forms';
import { FormToolsService } from 'src/app/services/form-tools.service';
import { authorList } from 'src/app/app-data/app-data';
import { GlobalService } from 'src/app/services/global.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from 'src/app/app-data/app-models';
import { SnackBarComponent } from '../../shared/misce/snack-bar/snack-bar.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input() postInput: any;

  authorList = authorList;
  id: string = '';
  intakeForm: UntypedFormGroup = this.fb.group({});
  keywordsControl = this.fb.control('', {
    updateOn: 'blur'  // update intakeForm upon mouse-away event
  });

  constructor(
    private fb: FormBuilder,
    public formToolsService: FormToolsService,
    private router: Router,
    private globalService: GlobalService,
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.intakeForm = this.fb.group({
      title: ['', Validators.required],
      authors: [[''], Validators.required],
      keywords: [[''], Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required]
    });

    this.keywordsControl.valueChanges.subscribe( value => {
      if (value) {
        /* split string into an array: 
        1. remove leading and trailing whitespace(s)
        2. replace pattern /0+ whitespaces followed by 1+ commas folowed by 0+ whitespaces/ with a single comma
        3. split a comma separated string into an array of substrings
        */
        this.intakeForm.controls.keywords.patchValue(value.trim().replace(/(\s)*(\,)+(\s)*/g, ',').split(','));
      }
    });

    console.log('%c ✅ add.component.ts: AddComponent instantiated. With empty postInput, it renders a blank intake form for fresh data entry; with postInput injected, \
    it renders a pre-populated intake form to be updated', 'color: blue; background-color: antiquewhite');

  }

  /*🔥🔥🔥 Populate form group  (appDocumentForm) with values loaded from database (appInput) */
  ngOnChanges(changes:SimpleChanges){
    if(changes['postInput'] && this.postInput){
      // console.log(this.appInput);
      this.id = this.postInput._id;
      this.intakeForm.patchValue(this.postInput);
      this.keywordsControl.patchValue(this.postInput.keywords.join(','));  // convert string[] to a single string comma-separated string
    }
  }

  onSubmit() {
    // If post exists, delete before adding a new post.
    if (this.id) {
      this.apiService.deletePost(this.id).subscribe(data => {});
    }

    // Create new post - RegEx to strip newline characters form response
    const post = JSON.stringify(this.intakeForm.value).replace(/[\r\n]/gm, '');

    this.apiService.addPost(<Post><unknown>post).subscribe( data => {
      let msg = 'Post saved!';
      this.globalService.snackBarText = msg;
      this.snackBar.openFromComponent(SnackBarComponent, {
        duration: 5000
      });
      this.router.navigate([`/post/details/${data._id}`]);
    })
  }

  onCancel() {
    if(confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
      this.router.navigate(['/post']);
    }
  }

  logForm() {
    console.log(this.intakeForm.value);
  }

}
