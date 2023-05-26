// Método para coletar o último elemento de um array

Array.prototype.last = function() {
    return this.length == 0? -1 :this[this.length-1];
}