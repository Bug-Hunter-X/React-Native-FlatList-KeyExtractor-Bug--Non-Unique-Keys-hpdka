# React Native FlatList KeyExtractor Bug: Non-Unique Keys

This repository demonstrates a common bug in React Native's FlatList component: using a keyExtractor function that does not provide unique keys for each item. This leads to incorrect rendering and scrolling behavior.

## Bug Description
The `keyExtractor` prop in `FlatList` requires a function that returns a unique string or number for each item in the data array.  If this function returns duplicate keys, the `FlatList` component may not render or scroll correctly. 

## Bug Reproduction
1. Clone the repository.
2. Run `npm install`.
3. Run `npx react-native run-android` or `npx react-native run-ios`.
4. Observe the incorrect rendering/scrolling behavior in the FlatList.

## Solution
The solution involves ensuring that the `keyExtractor` function always returns a unique key for each item in the data array.  This can be done by using a unique identifier for each item, such as a UUID.