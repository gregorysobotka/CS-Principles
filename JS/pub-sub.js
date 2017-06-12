/*

  Interface:

    Sub [subscribe]: accepts (topic, fnc)
      - topic : is the namespace published events will be pushed to
      - fnc (function) : is the function that will receive a payload from a published event. Serves
        as a closure for logic that is executed in response to published event.

    Pub [publish]: accepts (topic, payload)
      - topic : is the current namespace being used to publish payload
      - payload : Anything that can be assigned to a variable can be passed as the payload to a topic.


    Notes:

      Opted not to create a self instantiating module by defualt and instead to create a class that can
      be used in a way to support / promote boundries.

*/

class Events {

  constructor(){
    this.topics = {}
  }

  Sub(topic, fnc){
    if(!this.topics.hasOwnProperty(topic))
      this.topics[topic] = []
    return this.topics[topic].push(fnc)
  }

  Pub(topic, payload){
    if(this.topics.hasOwnProperty(topic)){
      this.topics[topic].forEach((fnc)=>{
        fnc(payload)
      })
      return true
    }
    return false
  }

}


/*

  Example :

  // Single Module implimenting Class

  var GlobalWebEvents = (function(){
    // Creating single module for use
    return new Events();
  })();

  // Subscriptions

  GlobalWebEvents.Sub('UserRegistration', function(payload){

    console.log(" * "+payload.message)

    if(payload.userId && payload.userId === 1)
      GlobalWebEvents.Pub('FirstUser', " * * We have our first user!")

  })

  GlobalWebEvents.Sub('FirstUser', function(payload){
    console.log(payload)
  })

  // Published Events

  GlobalWebEvents.Pub('UserRegistration', {message:"User 1 has registered", userId:1})
  GlobalWebEvents.Pub('UserRegistration', {message:"User 2 has registered", userId:2})
  GlobalWebEvents.Pub('UserRegistration', {message:"User 3 has registered", userId:3})

*/
