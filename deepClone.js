const dummyUser = {
  id: "1",
  profile: {
    name: "Alex",
    contacts: {
      email: "alex.rivera@example.com",
    }
  },
};

function deepClone (obj) {
  if(typeof obj !== "object" || obj === null){
    return obj
  }

  let copiedVal = Array.isArray(obj) ? [] : {}
  const keys = Object.keys(obj)

  for(let i =0; i < keys.length; i++){
    copiedVal[keys[i]] = deepClone(obj[keys[i]]) 
  }
  return copiedVal 
}

const copy = deepClone(dummyUser)
copy.profile.contacts.email = "changed"
console.log(copy.profile.contacts.email)
console.log(dummyUser.profile.contacts.email)