import { Dispatch, SetStateAction } from 'react';
import { Guests } from 'type/HotelInfoType';


// increment guest count
const incrementGuestCount = function incrementGuestCount(p:Guests, guest:Guests[], setGuest:Dispatch<SetStateAction<Guests[]>>, setTotalRoom:Dispatch<SetStateAction<number>>, setTotalGuest:Dispatch<SetStateAction<any>>):void | any {
  // increment room number
  if (p?.type === 'Room') {
    setTotalRoom(preRoom => preRoom + 1)
  }

  setGuest(
    guest.map(item => {
      let updateItem
      const updateChildrenList = []
      if (item.type === p.type) {
        // check type is same
        if (p?.type === 'Children') {
          // set default value for guest child
          const childGuestsInput = {
            childCount: item.childGuests.length + 1,
            age: 1
          }
          // push in array
          updateChildrenList.push(childGuestsInput)
          // update chid count
          updateItem = {
            count: item.count + 1,
            childGuests: [...item.childGuests, ...updateChildrenList]
          }
        } else {
          // default update guest count
          updateItem = { count: item.count + 1 }
        }
        return { ...item, ...updateItem }
      }
      return item
    })
  )

  setGuest(state => {
    updateTotalGuests(state, setTotalGuest)
    return state
  })
}

const decrementSeatCount = (p:Guests, guest:Guests[], setGuest:Dispatch<SetStateAction<Guests[]>>, setTotalRoom:Dispatch<SetStateAction<number>>, setTotalGuest:Dispatch<SetStateAction<any>>): void | any => {
  setGuest(
    guest.map(item => {
      let updateItem
      if (item.type === p.type) {
        // check type is same
        if (p?.type === 'Children') {
          // get all child list
          const updateChildrenList = [...item.childGuests]
          // remove last one
          updateChildrenList.pop()
          updateItem = {
            count: item.count - 1,
            childGuests: [...updateChildrenList]
          }
        } else {
          // default update guest count
          updateItem = { count: item.count - 1 }
        }
        return { ...item, ...updateItem }
      }
      return item
    })
  )
  setGuest(state => {
    updateTotalGuests(state, setTotalGuest)
    return state
  })
  if (p?.type === 'Room') {
    setTotalRoom(preRoom => preRoom - 1)
  }
}


const updateAgeOfChild = (
  e: React.ChangeEvent<HTMLSelectElement>,
  child: { childCount: number },
  guest:Guests[],
  setGuest: Dispatch<SetStateAction<Guests[]>>
): void => {
  const preGuestData = [...guest]
  const findChildOfPreGuestData =
    preGuestData?.[preGuestData.length - 1]?.childGuests

  const indexOfChild = findChildOfPreGuestData?.findIndex(
    item => item.childCount === child.childCount
  )

  const childInIndex = findChildOfPreGuestData?.[indexOfChild]
  childInIndex.age = +e.target.value

  // will update the functionality
  setGuest(preGuestData)
}

const updateTotalGuests = (guests: Guests[], setTotalGuest:Dispatch<SetStateAction<any>>): void | any => {
  const preGuests = guests.slice(1)
  const seatArray = preGuests.map(item => item.count)
  const sum = seatArray.reduce((a, b) => a + b)
  setTotalGuest(sum)
}

const ageRender = ():number[] => {
  const ages: number[] = []
  for (let a = 0; a < 18; a += 1) {
    ages.push(a)
  }
  return ages
}


export {incrementGuestCount, decrementSeatCount, updateAgeOfChild, ageRender}