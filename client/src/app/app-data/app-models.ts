export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

// data structure feeding key binding table
export class KeyBinding {
  constructor(
    public index: number, 
    public keys: string, 
    public actions: string,
    public examples: string = '',
    public mode: string = '',
  ){}
}

// data structure feeding a comparison table
export class Comparison {
  constructor(
    public metric: string,
    public desc1: string,
    public desc2: string
  ) {}
}

export class Post {
  constructor(
    public _id: string = '',
    public title: string,
    public authors: string[],
    public keywords: string[],
    public description: string[],
    public url: string[]
  ) {}
}

