const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Message class", function() {
  it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
    expect(function() {
      new Message();
    }).toThrow(new Error('Name required.'));
  });

  it("sets name and commands properties", function() {
    const name = "TestMessage";
    const commands = [new Command('type1'), new Command('type2')];
    const message = new Message(name, commands);

    expect(message.name).toBe(name);
    expect(message.commands).toBe(commands);
  });

  it("constructor sets name", function() {
    const name = 'TestMessage';
    const message = new Message(name);

    expect(message.name).toBe(name);
  });

  it("contains a commands array passed into the constructor as the 2nd argument", function() {
    const name = 'TestMessage';
    const commands = [new Command('type1'), new Command('type2')];
    const message = new Message(name, commands);

    expect(message.commands).toBe(commands);
  });

  it("has a default commands property as an empty array if not provided", function() {
    const name = 'TestMessage';
    const message = new Message(name);

    expect(message.name).toBe(name);
    expect(message.commands).toEqual([]);
  });
});


