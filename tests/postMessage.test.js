describe('postMessage', () => {
  it('should send a MessageEvent to an event listener', done => {
    window.addEventListener('message', evt => {
      expect(evt.origin).toContain('http://localhost')
      done()
    })
    window.postMessage('Hello!', '*')
  })
})
