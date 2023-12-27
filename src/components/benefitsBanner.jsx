import banner from '../assets/banner.svg'
const BenefitsBanner = () => {
  return (
    <div className='w-full h-full bg-cover bg-center bg-no-repeat'>
        <img src={banner} className='object-cover max-w-full h-auto' alt="" />
    </div>
    
  )
}

export default BenefitsBanner