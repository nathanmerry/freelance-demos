import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // Allow @ts-nocheck comments
      "@typescript-eslint/ban-ts-comment": "off",
      // Allow unused variables
      "@typescript-eslint/no-unused-vars": "off",
      // Allow explicit any type
      "@typescript-eslint/no-explicit-any": "off",
      // Allow empty object types
      "@typescript-eslint/no-empty-object-type": "off",
      // Allow missing React keys (common in development)
      "react/jsx-key": "warn",
      // Allow missing dependencies in useEffect
      "react-hooks/exhaustive-deps": "warn",
      // Allow unescaped entities in JSX
      "react/no-unescaped-entities": "off",
      // Allow missing dependencies in useEffect
      "react-hooks/exhaustive-deps": "warn",
      // Allow missing dependencies in useEffect
      "react-hooks/exhaustive-deps": "warn",
    }
  },
];

export default eslintConfig;
