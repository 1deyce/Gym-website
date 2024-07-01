import React from 'react';

const PaymentPage = () => {
    return (
        <section className="bg-black text-white">
            <div className="flex justify-center py-8 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
                <form 
                    name="PayFastPayNowForm" 
                    action="https://payment.payfast.io/eng/process" 
                    method="post"
                    className='p-10 rounded-md'
                >
                    <h1 className='text-white mb-12 text-5xl font-bold text-center'>
                        Pay Securely with <span className='text-[--heading-color]'>PayFast</span>
                    </h1>
                    <p className='text-white mb-12 text-center text-sm'>Please enter your amount below, click <span className='text-[--heading-color]'>'Pay Now'</span> to proceed further with your payment.</p>
                    <input required type="hidden" name="cmd" value="_paynow" />
                    <input required type="hidden" name="receiver" pattern="[0-9]" value="17320049" />
                    <table className='rounded-xl flex justify-center'>
                        <tbody>
                        <tr className='flex flex-col items-center space-y-2'>
                            <td>
                            <label id="PayFastAmountLabel" htmlFor="PayFastAmount" className='pr-4 text-center'>
                                Amount Due:
                            </label>
                            </td>
                            <td>
                            <input
                                required
                                id="PayFastAmount"
                                type="number"
                                step=".01"
                                name="amount"
                                min="5.00"
                                placeholder="0.00"
                                defaultValue="150"
                                className='rounded-md text-black p-2 font-semibold text-center w-full'
                            />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <input required type="hidden" name="item_name" maxLength="255" value="Sport Massage" />
                    <table className='flex justify-center'>
                        <tbody>
                        <tr>
                            <td colSpan={2} align="center">
                            <input type="image" src="https://my.payfast.io/images/buttons/PayNow/Primary-Large-PayNow.png" alt="Pay Now" title="Pay Now with Payfast" className='p-10' />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </section>
    )
}

export default PaymentPage;