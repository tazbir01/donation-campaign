const getDonationData = () =>{
    const storedDonationData = localStorage.getItem('donations')
    if(storedDonationData){
        return JSON.parse(storedDonationData)
    }
    return []
}

const saveDonationData= (id) =>{
    const storedDonationData = getDonationData()
    const exist = storedDonationData.find(donationId => donationId === id)
    if(!exist){
        storedDonationData.push(id)
        localStorage.setItem('donations', JSON.stringify(storedDonationData))
    }
}
export {getDonationData, saveDonationData}