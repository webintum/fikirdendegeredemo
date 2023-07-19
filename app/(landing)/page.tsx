import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div>
      <div>
        <Link href="/sign-in">
          <Button>
            Login
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage;
