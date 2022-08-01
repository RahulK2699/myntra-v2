export function calculate(items) {
    let sub_total = items.reduce(function (sum, current) {
      return (parseFloat(sum) + parseFloat(current.sub_total)).toFixed(2)
    }, 0)
    
  
    // let gst = items.reduce(function (sum, current) {
    //   return sum + (current.sub_total * current.gst) / 100
    // }, 0)

    let gst : string = '0'
    
    let final_total = (parseFloat(sub_total) + parseFloat(gst)).toFixed(2)
    return {
      sub_total: sub_total,
      tax: gst,
      final_total: final_total,
    }
  }