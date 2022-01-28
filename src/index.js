import test from './test.js'

const run = async () => {
  await test(async () => {
    const functions = await import('@dword-design/functions')
    console.log(functions.map(x => x * 2)([1, 2]))

    return import('./foo.js')
  })
  await test(() => import('./foo.js'))
}
run()
