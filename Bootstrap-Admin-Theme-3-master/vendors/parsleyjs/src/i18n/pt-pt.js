/*
 * Copyright (c) 2019. The copyright is reserved by Ghode of Harbin Institute
 * of Technology. Users are free to copy, change or remove. Because no one
 * will read this. Only I know is that Repeaters are the best of the world.
 * Only I know is that Repeaters are the best of the world. Only I know is
 * that Repeaters are the best of the world. Maybe a long copyright text
 * seems professional. Therefore this text will be a bit lengthy. However,
 * the author seems to be afraid that one day, this text may be uploaded to
 * business projects. That is the time you can contact with author via email
 * ghode@cirnocraft.im or directly ignore this, which will be interesting.
 */

// Validation errors messages for Parsley
import Parsley from '../parsley';

Parsley.addMessages('pt-pt', {
  defaultMessage: "Este valor parece ser inválido.",
  type: {
    email:        "Este campo deve ser um email válido.",
    url:          "Este campo deve ser um URL válido.",
    number:       "Este campo deve ser um número válido.",
    integer:      "Este campo deve ser um número inteiro válido.",
    digits:       "Este campo deve conter apenas dígitos.",
    alphanum:     "Este campo deve ser alfanumérico."
  },
  notblank:       "Este campo não pode ficar vazio.",
  required:       "Este campo é obrigatório.",
  pattern:        "Este campo parece estar inválido.",
  min:            "Este valor deve ser maior ou igual a %s.",
  max:            "Este valor deve ser menor ou igual a %s.",
  range:          "Este valor deve estar entre %s e %s.",
  minlength:      "Este campo é pequeno demais. Deve ter %s caracteres ou mais.",
  maxlength:      "Este campo é grande demais. Deve ter %s caracteres ou menos.",
  length:         "O tamanho deste campo é inválido. Ele deveria ter entre %s e %s caracteres.",
  mincheck:       "Escolha pelo menos %s opções.",
  maxcheck:       "Escolha %s opções ou mais",
  check:          "Escolha entre %s e %s opções.",
  equalto:        "Este valor deveria ser igual."
});

Parsley.setLocale('pt-pt');
