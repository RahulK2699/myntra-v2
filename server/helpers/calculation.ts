export function calculate(items) {
  let sub_total = items.reduce(function (sum, current) {
    return (parseFloat(sum) + parseFloat(current.sub_total)).toFixed(2);
  }, 0);

  let gst: any = (sub_total * 5) / 100;
  let final_total = (parseFloat(sub_total) + parseFloat(gst)).toFixed(2);
  return {
    sub_total: sub_total,
    tax: gst,
    final_total: final_total,
  };
}
