// global scope dapat diakses parent dan child
const a = 2;

// parent scope hanya dapat diakses oleh parent dan child
function parent() {
    const a = 2;

    //child scope hanya dapat diakses oleh child
    function child() {
        const a = 2;
    }
}