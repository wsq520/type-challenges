class Person {

}

interface IPerson {
  new ():Person
}

function factory(fn:IPerson) {
  const res = new fn()
  return res
}

factory(Person)