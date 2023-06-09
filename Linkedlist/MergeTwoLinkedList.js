var mergeTwoLists = function(l1, l2) {
    let dummy = {val:-1,next:null}
    let curr = dummy
    while(l1&&l2){
        if(l1.val>l2.val){
            curr.next = new ListNode(l2.val)
            l2 = l2.next
        }else{
            curr.next = new ListNode(l1.val)
            l1 = l1.next
        }
        curr = curr.next
    }
   curr.next = l1||l2
   return dummy.next
  };