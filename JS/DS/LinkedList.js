/*

  Singly Linked List

  -------------------------------------------------------------------------------------

  Notes:

    Anything can be passed to linked list [int, string, object]. If you pass an object, remove will not work correctly as it is
    comparing the value of the data passed to the remove function. A new function removeAt (which accepts an index) would need
    to be added (to remove a node at index(i)).

  Constructor :

    var newList = new LinkedList('first')
      OR
    var testList = new LinkedList()

  Interface:

    testList.add("...")       // adds to end of list
    testList.remove("...")    // removes first matched item
    testList.prepend("...")   // ... pushes to front of LinkedList
    testList.reverse()        // ... returns a reversed copy (new COPY) of reversed list
    testList.size             // ... returns int size of LinkedList

*/

class LinkedList {

  constructor(data){
    var newNode = (data) ? new LinkNode(data) : null;
    this.count = (data) ? 1 : 0;
    this.head = newNode
  }

  add(data){

    this.count = this.count + 1

    if(this.head === null)
      return this.head = new LinkNode(data)

    var current = this.head
    while(current.next !== null){
      current = current.next
    }

    return current.next = new LinkNode(data)

  }

  remove(dataToRemove){

    var current = this.head

    // If first node is item to remove
    if(current.data === dataToRemove){

      if(current.next !== null)
        this.head = current.next
      else
        this.head = null

      this.count = this.count - 1
      return this.count

    }

    while(current.next !== null && current.next.data !== dataToRemove)
      current = current.next

    if(current.next !== null && current.next.data === dataToRemove){
        current.next = current.next.next
        this.count = this.count - 1
    }

    return this.count

  }

  prepend(data){

    var newNode = new LinkNode(data)
    this.count = this.count + 1

    if(this.head === null)
      return this.head = newNode

    var tempNext = this.head
    newNode.next = tempNext
    return this.head = newNode

  }

  reverse(){

    // Returns reversed copy of linked list
    var current = this.head
    var currantData = current.data || null
    var newLinkedList = new LinkedList(currantData)

    while(current !== null && current.next !== null){
      current = current.next
      currantData = current.data || null
      newLinkedList.prepend(currantData)
    }

    return newLinkedList;

  }

  get size(){
    return this.count
  }

}

class LinkNode {
    constructor(data, next){
      this.data = data
      this.next = next || null
    }
}
