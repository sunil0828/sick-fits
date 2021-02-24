import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Category() {
  return (
    <NavStyles>
      <Link href="/shirts">Shirts</Link>
      <Link href="/jeans">Jeans</Link>
      <Link href="/shoes">Shoes</Link>
      <Link href="/homeAppliance">Home Appliance</Link>
    </NavStyles>
  );
}
