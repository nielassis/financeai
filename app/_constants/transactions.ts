import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TransactionCategoryLabels = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};

export const TransactionPaymentMethodLabels = {
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência bancária",
  BANK_SLIP: "Boleto",
  PIX: "Pix",
  OTHER: "Outro",
};

export const TransactionPaymentMethodIcons = {
  [TransactionPaymentMethod.CREDIT_CARD]: "credit-card.svg",
  [TransactionPaymentMethod.DEBIT_CARD]: "debit-card.svg",
  [TransactionPaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
  [TransactionPaymentMethod.BANK_SLIP]: "bank-slip.svg",
  [TransactionPaymentMethod.CASH]: "money.svg",
  [TransactionPaymentMethod.PIX]: "pix.svg",
  [TransactionPaymentMethod.OTHER]: "other.svg",
};

export const TransactionTypeOptions = [
  {
    value: TransactionType.EXPENSE,
    label: "Gastos",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Depósito",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];

export const TransactionPaymentMethodOptions = [
  {
    value: TransactionPaymentMethod.CASH,
    label: TransactionPaymentMethodLabels[TransactionPaymentMethod.CASH],
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label: TransactionPaymentMethodLabels[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label: TransactionPaymentMethodLabels[TransactionPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label:
      TransactionPaymentMethodLabels[TransactionPaymentMethod.BANK_TRANSFER],
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label: TransactionPaymentMethodLabels[TransactionPaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: TransactionPaymentMethodLabels[TransactionPaymentMethod.PIX],
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: TransactionPaymentMethodLabels[TransactionPaymentMethod.OTHER],
  },
];

export const TransactionCategoryOptions = [
  {
    value: TransactionCategory.EDUCATION,
    label: TransactionCategoryLabels[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: TransactionCategoryLabels[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.FOOD,
    label: TransactionCategoryLabels[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HEALTH,
    label: TransactionCategoryLabels[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.HOUSING,
    label: TransactionCategoryLabels[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.OTHER,
    label: TransactionCategoryLabels[TransactionCategory.OTHER],
  },
  {
    value: TransactionCategory.SALARY,
    label: TransactionCategoryLabels[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: TransactionCategoryLabels[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.UTILITY,
    label: TransactionCategoryLabels[TransactionCategory.UTILITY],
  },
];
