describe('Array', function() {
    it("should same with javascript", function() {
        const names: string[] = ["Ida", "Danuartha"]
        const values: number[] = [1,2,3,4,5]

        console.info(names)        
        console.info(values)        
    })

    it("should support readonly array", function() {
        const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"]

        console.info(hobbies)        
        console.info(hobbies[0])        
        console.info(hobbies[1])        
    })

    it("should support tupple", function() {
        const person: readonly [string, string, number] = ["Danuartha", "Coding", 18]

        console.info(person)        
        console.info(person[0])        
        console.info(person[1])        
        console.info(person[2])        
    })
})