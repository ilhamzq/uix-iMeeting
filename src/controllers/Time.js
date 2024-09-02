import axios from 'axios'

const empty = []
const APP_URLS = ''

const CTime = {
    read: () => {
        let res = []

        res.push({ id: '9', name: '09:00' })
        res.push({ id: '10', name: '10:00' })
        res.push({ id: '11', name: '11:00' })
        res.push({ id: '12', name: '12:00' })
        res.push({ id: '13', name: '13:00' })
        res.push({ id: '14', name: '14:00' })
        res.push({ id: '15', name: '15:00' })
        res.push({ id: '16', name: '16:00' })
    
        return res
    }
}

export default CTime