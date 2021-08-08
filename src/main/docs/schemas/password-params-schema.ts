export const passwordParamsSchema = {
  type: 'object',
  properties: {
    description: {
      type: 'string'
    },
    category: {
      type: 'object'
    },
    password: {
      type: 'string'
    }
  },
  required: ['password', 'description', 'category']
}
