import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Unsubscribe() {
  const router = useRouter()
  const { token, status: urlStatus, email, message: urlMessage } = router.query
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Handle redirect from API
    if (urlStatus === 'success') {
      setStatus('success')
      setMessage(`Successfully unsubscribed ${email} from our mailing list.`)
      return
    }
    
    if (urlStatus === 'error') {
      setStatus('error')
      setMessage(urlMessage as string || 'Failed to unsubscribe')
      return
    }

    // Handle direct token access
    if (!token) {
      setStatus('error')
      setMessage('No unsubscribe token provided')
      return
    }

    const unsubscribe = async () => {
      try {
        const response = await fetch(`/api/unsubscribe?token=${token}`)
        
        if (response.redirected) {
          // API redirected us, let the useEffect handle the new URL
          return
        }
        
        const data = await response.json()

        if (response.ok) {
          setStatus('success')
          setMessage(`Successfully unsubscribed ${data.email} from our mailing list.`)
        } else {
          setStatus('error')
          setMessage(data.error || 'Failed to unsubscribe')
        }
      } catch (error) {
        setStatus('error')
        setMessage('An error occurred while processing your request')
      }
    }

    unsubscribe()
  }, [token, urlStatus, email, urlMessage])

  return (
    <>
      <Head>
        <title>Unsubscribe - Elevate</title>
        <meta name="description" content="Unsubscribe from Elevate mailing list" />
      </Head>
      
      <div className="unsubscribe-page">
        <div className="unsubscribe-container">
          <div className="unsubscribe-header">
            <h2>Unsubscribe from Elevate</h2>
          </div>
          
          <div className="unsubscribe-card">
            <div className="unsubscribe-content">
              {status === 'loading' && (
                <div className="unsubscribe-loading">
                  <div className="spinner"></div>
                  <p className="loading-text">Processing your unsubscribe request...</p>
                </div>
              )}
              
              {status === 'success' && (
                <div className="unsubscribe-success">
                  <div className="success-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="success-title">Successfully Unsubscribed</h3>
                  <p className="success-message">{message}</p>
                  <a href="/" className="home-link">
                    Return to homepage
                  </a>
                </div>
              )}
              
              {status === 'error' && (
                <div className="unsubscribe-error">
                  <div className="error-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="error-title">Unsubscribe Failed</h3>
                  <p className="error-message">{message}</p>
                  <a href="/" className="home-link">
                    Return to homepage
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
