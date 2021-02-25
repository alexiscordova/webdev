import { pipe } from 'ramda'

describe('Declarative', () => {
  it('Rewrite from imperative to declarative, using pipe', () => {
    const animals = ['bird', 'orangutan', 'monkey', 'cat', 'lionfish']

    const result = []
    for (let i = 0; i < animals.length; i++) {
      const el = animals[i]
      if (el.length > 4) result.push(el)
    }

    const result2 = []
    for (let i = result.length - 1; i >= 0; i--) {
      result2.push(`${result[i]}!`)
    }

    const result3 = []
    for (let i = 0; i < result2.length; i++) {
      let placement = 0
      for (var j = 0; j < result3.length; j++) {
        if (result3[j].length < result2[i].length) placement++
      }
      result3.splice(placement, 0, result2[i])
    }

    let result4 = ''
    for (let i = 0; i < result3.length; i++) {
      result4 += result3[i]
      if (i < result3.length - 1) result4 += ' < '
    }

    expect(result4).toEqual('monkey! < lionfish! < orangutan!')
  })

  it('rewrite the declarative function using named functions and pipe', () => {
    const nums = [1, 2, 3, 4, 5]

    let result1 = 0
    for (let i = 0; i < nums.length; i++) {
      result1 += nums[i]
    }

    const result2 = []
    for (let i = 0; i < nums.length; i++) {
      result2.push(nums[i] + result1)
    }

    const result3 = []
    for (let i = 0; i < result2.length; i++) {
      result3.push(result2[i] * 2)
    }

    expect(result3).toEqual([32, 34, 36, 38, 40])
  })
})
