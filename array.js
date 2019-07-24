//Question Two Result: 
    //Part One: Array { length: 1, _capacity: 3, ptr: 0 }
    //Part Two: Array { length: 6, _capacity: 12, ptr: 3 }
//Question Three Result:
    //{ length: 6, _capacity: 12, ptr: 3 }
    //{ length: 3, _capacity: 12, ptr: 3 }
//Question Four Result:
    //Part One: NaN is returned because of the Float64Array in memory which creates 
    //an array of an array of 64-bit floating point NUMBERS.

    //Part Two: Resize is a private function which moves the 
    //array to a new portion of contiguous memoryso that 
    //there is more space than in the previous section. 
    //It also frees up the previous memory addresses at which 
    //the array was stored.
const Mem = require('./memory')

const memory = new Mem()

class Array {

    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.set(this.ptr + this.length, value);
        this.length++;
    }



    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(
            this.ptr + index + 1, 
            this.ptr + index, 
            this.length - index
        );
        memory.set(
            this.ptr + index, 
            value
        );
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(
            this.ptr + index, 
            this.ptr + index + 1, 
            this.length - index - 1
        );
        this.length--;
    }
}


function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    // arr.push(3);
    // arr.push(5);
    // arr.push(15);
    // arr.push(19);
    // arr.push(45);
    // arr.push(10);
    // arr.pop();
    // arr.pop();
    // arr.pop();

    arr.push('tauhida');

    console.log(arr.get(0));
}

main();
