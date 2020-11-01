module.exports = {
  singleQuote: true,
  printWidth: 120,
  /**
   * Without the below rule, this code:
   *
   * ```html
   *  <ds-secondary-button
   *     @click="logInRedirect"
   *     :type="'primary'"
   *     :class="{ [style.errorButton]: true }"
   *     >{{ $t('Log_In') }}</ds-secondary-button
   *   >
   *  ```
   *
   *  will be autofixed into:
   *
   * ```html
   *  <ds-secondary-button @click="logInRedirect" :type="'primary'" :class="{ [style.errorButton]: true }">{{
   *    $t('Log_In')
   *  }}</ds-secondary-button>
   * ```
   *
   * which is unintended (notice how the `>{{` moustache interpolation was split )
   * @see https://github.com/prettier/prettier/issues/5844
   */
  htmlWhitespaceSensitivity: 'ignore',
  /**
   * Fix "Delete 'CR' prettier/prettier error"
   * https://stackoverflow.com/questions/53516594/why-do-i-keep-getting-delete-cr-prettier-prettier
   */
  endOfLine: 'auto',
  trailingCommas: 'all',
};
