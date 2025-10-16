import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.jsx';
import CartScreen from './screens/CartScreen.jsx';
import CheckoutScreen from './screens/CheckoutScreen.jsx';
import PaymentScreen from './screens/PaymentScreen.jsx';
import OrderConfirmationScreen from './screens/OrderConfirmationScreen.jsx';
import { CartProvider } from './context/CartContext.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
          <Stack.Screen name="OrderConfirmation" component={OrderConfirmationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
