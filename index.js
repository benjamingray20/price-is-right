const calculateTotal = (items) => {
  const iPhone = items[0]
  const videoAdapter = items[1]
  let total = []


  iPhone.total = (iPhone.price * iPhone.quantity) - (iPhone.price * iPhone.quantity * iPhone.discount)
  iPhone.total = iPhone.total.toFixed(2)
  iPhone.total = iPhone.total - (iPhone.total % 1.00)
  videoAdapter.total = videoAdapter.price - (videoAdapter.price * videoAdapter.discount)
  videoAdapter.total = videoAdapter.total.toFixed(2)

  total.push(iPhone, videoAdapter)

  return total
}




module.exports = calculateTotal
