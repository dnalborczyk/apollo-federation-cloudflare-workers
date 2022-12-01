import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  generates: {
    './src/types/schema.generated.ts': {
      config: {
        federation: true,
        immutableTypes: true,
        useIndexSignature: true,
        useTypeImports: true,
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
  schema: './src/schema/typeDefs.ts',
}

export default config
