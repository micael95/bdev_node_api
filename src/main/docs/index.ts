import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'BDev - Daily tools for people',
    description: 'This API provides resources for web and mobile bdev apps.',
    version: '1.0.0',
    contact: {
      name: 'Micael Duarte',
      email: 'developer.micael@gmail.com',
      url: 'https://www.linkedin.com/in/micael-duarte'
    },
    license: {
      name: 'MIT'
    }
  },
  externalDocs: {
    description: 'Study course reference',
    url: 'https://www.udemy.com/course/tdd-com-mango/?referralCode=B53CE5CA2B9AFA5A6FA1'
  },
  servers: [{
    url: '/api',
    description: 'Server 1'
  }],
  tags: [{
    name: 'Login',
    description: 'Login related APIs'
  },{
    name: 'Password',
    description: 'Password related APIs'
  }],
  paths,
  schemas,
  components
}
