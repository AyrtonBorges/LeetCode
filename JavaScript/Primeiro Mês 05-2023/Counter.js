// Função para contagem

let createCounter = function(n) {
    return function() {
        let count = n-1;
        return function() {
            return ++count;
        };
    }();
};