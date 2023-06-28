import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TreeNode } from 'src/app/app-data/app-models';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  @Input() tree: TreeNode[] = [{name: 'test'}];
  @Input() title = '';

  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  constructor() {}

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
       this.dataSource.data = this.tree;
       this.treeControl.dataNodes = this.tree;
       this.treeControl.expandAll();
  }


}
