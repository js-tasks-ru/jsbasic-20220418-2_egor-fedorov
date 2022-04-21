let calculator = {
  read(a, b) {
    calculator.first = a;
    calculator.second = b;
  },
  sum() {
    return calculator.first + calculator.second;
  },
  mul() {
    return calculator.first * calculator.second;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
