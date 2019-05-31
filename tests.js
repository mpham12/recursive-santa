import { deliverPresents } from './santa'
import { spy } from 'sinon'
import sinonChai from 'sinon-chai'
import chai, { expect } from 'chai'

chai.use(sinonChai)

describe('Santa Claus', () => {
  it('recursively delivers presents', () => {
    var consoleLogSpy = spy(console, 'log')

    deliverPresents(['Rich', 'Peggy', 'David', 'Kevin', 'Will', 'Andrew', 'Christina'])

    expect(consoleLogSpy).to.have.callCount(7)

    expect(consoleLogSpy.getCall(0).args[0]).to.equal('Delivering presents to Rich')
    expect(consoleLogSpy.getCall(1).args[0]).to.equal('Delivering presents to Peggy')
    expect(consoleLogSpy.getCall(2).args[0]).to.equal('Delivering presents to David')
    expect(consoleLogSpy.getCall(3).args[0]).to.equal('Delivering presents to Kevin')
    expect(consoleLogSpy.getCall(4).args[0]).to.equal('Delivering presents to Will')
    expect(consoleLogSpy.getCall(5).args[0]).to.equal('Delivering presents to Andrew')
    expect(consoleLogSpy.getCall(6).args[0]).to.equal('Delivering presents to Christina')
  })
})
