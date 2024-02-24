// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  // Write your unit tests here!
    test("Value of organization is 'nonprofit'", function() {
      let output = launchcode.organization;
      expect(output).toEqual("nonprofit");
    }); 

    test("Value of executiveDirector is 'Jeff'", function() {
      let output = launchcode.executiveDirector;
      expect(output).toEqual('Jeff');
    }); 

    test("Value of percentageCoolEmployees is 100", function() {
      let output = launchcode.percentageCoolEmployees; 
      expect(output).toEqual(100);
    });

    test("Value of programsOffered is an array of three strings: 'Web Development', 'Data Analysis', and 'Liftoff'", function() {
      let array = launchcode.programsOffered;
      expect(array.length).toBe(3);
      expect(launchcode.programsOffered[0]).toEqual('Web Development'); 
      expect(launchcode.programsOffered[1]).toEqual('Data Analysis'); 
      expect(launchcode.programsOffered[2]).toEqual('Liftoff'); 
    });

    test("launchOutput() returns 'Rutabagas! That doesn't work!' when passed a number not divisible by 2, 3, or 5", function() {
      let output = launchcode.launchOutput(17); 
      expect(output).toEqual("Rutabagas! That doesn't work!");
    })
    
    test("launchOutput() returns 'LaunchCode Rocks!' when passed a number divisible by 2, 3, and 5", function() {
      let output = launchcode.launchOutput(30); 
      expect(output).toEqual('LaunchCode Rocks!');
    })
    
    test("launchOutput() returns 'LaunchCode!' when passed a number divisible by 2 and 3", function() {
      let output = launchcode.launchOutput(6); 
      expect(output).toEqual('LaunchCode!');
    });

    test("launchOutput() returns 'Code Rocks!' when passed a number divisible by 3 and 5", function() {
      let output = launchcode.launchOutput(15);
      expect(output).toEqual('Code Rocks!'); 
    }); 

    test("launchOutput() returns 'Launch Rocks!' when passed a number divisible by 2 and 5", function() {
      let output = launchcode.launchOutput(10); 
      expect(output).toEqual('Launch Rocks!');
    })
    
    test("launchOutput() returns 'Launch!' when passed a number only divisible by 2", function() {
      let output = launchcode.launchOutput(2);
      expect(output).toEqual('Launch!'); 
    }); 

    test("launchOutput() returns 'Code!' when passed a number only divisible by 3", function() {
      let output = launchcode.launchOutput(3); 
      expect(output).toEqual('Code!');
    }); 

    test("launchOutput() returns 'Rocks!' when passed a number only divisible by 5", function() {
      let output = launchcode.launchOutput(5); 
      expect(output).toEqual('Rocks!');
    });

});