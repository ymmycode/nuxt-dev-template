import { defineEventHandler, getRouterParam } from 'h3';

export default defineEventHandler((event) => {
  return {
    hello: 'world'
  }
})