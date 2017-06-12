/*



*/

class node {

  constructor (data, leftChild, rightChild){
    this.data = data;
    this.left = leftChild || null;
    this.right = rightChild || null;
  }

  search(d){

    if(this.data === d)
      return this
    else if(d > this.data && this.right !== null)
      return this.right.search(d)
    else if(d < this.data && this.left !== null)
      return this.left.search(d)

    return null

  }

  insert(d){

    if(this.data === d)
      return this
    else if(d > this.data)
      if(this.right === null)
        this.right = new node(d)
      else
        return this.right.insert(d)
    else if(d < this.data)
      if(this.left === null)
        this.left = new node(d)
      else
        return this.left.insert(d)

  }

  isLeaf(){
    // a leaf is...
    return (this.left === null && this.right === null)
  }

}
