import { FlatCompat } from '@eslint/eslintrc'
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})
const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {
      "prettier/prettier": "error",
      "react-hooks/exhaustive-deps": "off",
    },
    plugins: ['prettier'],
  }),
]
export default eslintConfig