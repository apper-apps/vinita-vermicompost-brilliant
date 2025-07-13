const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// In-memory storage for contact inquiries
let contactInquiries = []

export const submitContactForm = async (formData) => {
  await delay(500)
  
  const maxId = Math.max(...contactInquiries.map(c => c.Id || 0), 0)
  const newInquiry = {
    ...formData,
    Id: maxId + 1,
    timestamp: new Date().toISOString()
  }
  
  contactInquiries.push(newInquiry)
  return { ...newInquiry }
}

export const getContactInquiries = async () => {
  await delay(300)
  return [...contactInquiries]
}

export const getContactInquiryById = async (id) => {
  await delay(200)
  const inquiry = contactInquiries.find(c => c.Id === parseInt(id))
  if (!inquiry) {
    throw new Error("Contact inquiry not found")
  }
  return { ...inquiry }
}

export const deleteContactInquiry = async (id) => {
  await delay(250)
  const index = contactInquiries.findIndex(c => c.Id === parseInt(id))
  if (index === -1) {
    throw new Error("Contact inquiry not found")
  }
  const deletedInquiry = { ...contactInquiries[index] }
  contactInquiries.splice(index, 1)
  return deletedInquiry
}