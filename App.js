import { Text, View, ScrollView, FlatList, StyleSheet } from 'react-native';

const Table = () => {
  const tableData = [];

  for (let i = 1; i <= 10; i++) {
    tableData.push({ id: i, value: i },)
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.titleBox}>
          <Text style={styles.text}>Title</Text>
        </View>
        <FlatList
          data={tableData}
          style={styles.list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <View>
                <Text style={styles.text}>Test</Text>
              </View>
              <View>
                <Text style={styles.text}>{item.value}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 24,
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    width: '100%',
    paddingHorizontal: 24,
  },
  titleBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    marginBottom: 24,
    backgroundColor: '#4170cc',
  },
  text: {
    color: 'white'
  },
  list: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#00256d',
    width: '80%',
    alignSelf: 'center',
    padding: 8,
    height: 60,
    marginBottom: 8,
  }
})

export default Table;

