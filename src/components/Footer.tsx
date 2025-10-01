import Link from 'next/link'

function Footer() {

    const date = new Date()

    return (
        <footer className='py-10 bg-gray-100'>
            <>
                <div className="container mx-auto px-3">
                    <div className="grid grid-cols-3 gap-10 pb-10">
                        <div className="space-y-5">
                            <div className="text-4xl font-kanit">We`d love to cooperate to build amazing</div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reprehenderit quis cupiditate mollitia ut reiciendis ipsum harum eligendi voluptatem tempora?</p>
                            <div className="flex gap-x-20">
                                <div className="font-semibold">Call our office</div>
                                <div className="">+91 12345678987</div>
                            </div>
                            <div className="">
                                <div className="font-semibold">Send a message</div>
                                <div className="">example@gmail.com</div>
                            </div>
                        </div>
                        <div className="space-y-5">
                            <div className="font-semibold text-xl">Company</div>
                            <Link href={'/about'} className='block'>About us</Link>
                            <Link href={'/properties'} className='block'>Properties</Link>
                            <Link href={'/contact'} className='block'>Contact</Link>
                        </div>
                        <div className="space-y-5">
                            <div className="font-semibold text-xl">Follow us</div>
                            <Link href={'/'} className='block'>Facebook</Link>
                            <Link href={'/'} className='block'>Instagram</Link>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="container mx-auto px-3 border-t-1 border-gray-200 pt-2">
                        <span>&copy;{date.getFullYear()}</span>
                    </div>
                </div>
            </>
        </footer>
    )
}

export default Footer