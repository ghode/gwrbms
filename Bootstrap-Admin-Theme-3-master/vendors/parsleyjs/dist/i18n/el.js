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
// Load this after Parsley

Parsley.addMessages('el', {
  defaultMessage: "Η τιμή φαίνεται να είναι μη έγκυρη.",
  type: {
    email:        "Η τιμή πρέπει να είναι ένα έγκυρο email.",
    url:          "Η τιμή πρέπει να είναι ένα έγκυρο url.",
    number:       "Η τιμή πρέπει να είναι ένας έγκυρος αριθμός.",
    integer:      "Η τιμή πρέπει να είναι ένας έγκυρος ακέραιος.",
    digits:       "Η τιμή πρέπει να είναι ψηφία.",
    alphanum:     "Η τιμή πρέπει να είναι αλφαριθμητικό."
  },
  notblank:       "Η τιμή δεν πρέπει να είναι κενή.",
  required:       "Η τιμή αυτή απαιτείται.",
  pattern:        "Η τιμή φαίνεται να είναι μη έγκυρη.",
  min:            "Η τιμή πρέπει να είναι μεγαλύτερη ή ίση με %s.",
  max:            "Η τιμή πρέπει να είναι μικρότερη ή ίση με %s.",
  range:          "Η τιμή πρέπει να είναι μεταξύ %s και %s.",
  minlength:      "Το κείμενο είναι πολύ μικρό. Πρέπει να είναι %s ή και περισσότεροι χαρακτήρες.",
  maxlength:      "Η κείμενο είναι πολύ μεγάλο. Πρέπει να είναι %s ή και λιγότεροι χαρακτήρες.",
  length:         "Το μήκος του κειμένου είναι μη έγκυρο. Πρέπει να είναι μεταξύ %s και %s χαρακτήρων.",
  mincheck:       "Πρέπει να επιλέξετε τουλάχιστον %s επιλογές.",
  maxcheck:       "Πρέπει να επιλέξετε %s ή λιγότερες επιλογές.",
  check:          "Πρέπει να επιλέξετε μεταξύ %s και %s επίλογων.",
  equalto:        "Η τιμή πρέπει να είναι η ίδια."
});

Parsley.setLocale('el');
