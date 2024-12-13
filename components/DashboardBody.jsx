import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DashboardBody() {
  return (
    <ScrollView style={styles.scrollContent} contentContainerStyle={{paddingBottom: 20}}>

      <View style={styles.greetingContainer}>
        <View style={styles.greetingRow}>
          <Text style={styles.greetingText}>Good Morning, Chelsea</Text>

          <Text style={styles.emojiIcon}>☀️</Text>
        </View>
        <Text style={styles.greetingSub}>Check all your incoming and outgoing transactions here</Text>
      </View>


      <View style={styles.accountContainer}>
        <View style={styles.accountBox}>
          <Text style={styles.accountLabel}>Account No.100899</Text>
          <Text style={styles.accountLabel}>Account No.100899</Text>
        </View>
      </View>

      <View style={styles.balanceSection}>
        <View style={styles.balanceInfo}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.balanceValue}>Rp 10.000.000</Text>

            <Text style={[styles.emojiIcon, {marginLeft: 4}]}>👀</Text>
          </View>
        </View>
        <View style={styles.actionButtons}>

          <View style={styles.actionButton}>
            <Text style={styles.actionButtonText}>+</Text>
          </View>

          <View style={styles.actionButton}>
            <Text style={styles.actionButtonText}>➜</Text>
          </View>
        </View>
      </View>


      <View style={styles.transactionContainer}>
        <Text style={styles.transactionHeader}>Transaction History</Text>


        <View style={styles.transactionItem}>
          <View style={styles.transactionLeft}>
            <View style={styles.avatarPlaceholder}></View>
            <View style={styles.transactionTextBlock}>
              <Text style={styles.transactionName}>Adityo Gizwanda</Text>
              <Text style={styles.transactionType}>Transfer</Text>
              <Text style={styles.transactionDate}>08 December 2024</Text>
            </View>
          </View>
          <Text style={styles.transactionAmountMinus}>- 75.000,00</Text>
        </View>

        <View style={styles.transactionItem}>
          <View style={styles.transactionLeft}>
            <View style={styles.avatarPlaceholder}></View>
            <View style={styles.transactionTextBlock}>
              <Text style={styles.transactionName}>Adityo Gizwanda</Text>
              <Text style={styles.transactionType}>Topup</Text>
              <Text style={styles.transactionDate}>08 December 2024</Text>
            </View>
          </View>
          <Text style={styles.transactionAmountPlus}>+ 75.000,00</Text>
        </View>

        <View style={styles.transactionItem}>
          <View style={styles.transactionLeft}>
            <View style={styles.avatarPlaceholder}></View>
            <View style={styles.transactionTextBlock}>
              <Text style={styles.transactionName}>Adityo Gizwanda</Text>
              <Text style={styles.transactionType}>Transfer</Text>
              <Text style={styles.transactionDate}>08 December 2024</Text>
            </View>
          </View>
          <Text style={styles.transactionAmountMinus}>- 75.000,00</Text>
        </View>

        <View style={styles.transactionItem}>
          <View style={styles.transactionLeft}>
            <View style={styles.avatarPlaceholder}></View>
            <View style={styles.transactionTextBlock}>
              <Text style={styles.transactionName}>Adityo Gizwanda</Text>
              <Text style={styles.transactionType}>Transfer</Text>
              <Text style={styles.transactionDate}>08 December 2024</Text>
            </View>
          </View>
          <Text style={styles.transactionAmountMinus}>- 75.000,00</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
    paddingHorizontal: 16,
    paddingTop: 16
  },
  greetingContainer: {
    marginBottom: 16
  },
  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8
  },
  greetingSub: {
    fontSize: 14,
    color: '#555'
  },
  emojiIcon: {
    fontSize: 20
  },

  accountContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1
  },
  accountBox: {
    backgroundColor: '#0FB5B8',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row'
  },
  accountLabel: {
    color: '#fff',
    fontSize: 14
  },
  accountNumber: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4
  },

  balanceSection: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1
  },
  balanceInfo: {
    flex: 1
  },
  balanceLabel: {
    fontSize: 14,
    color: '#555'
  },
  balanceValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
    marginRight: 8
  },
  actionButtons: {
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: '#0FB5B8',
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  actionButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },

  transactionContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1
  },
  transactionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginRight: 12
  },
  transactionTextBlock: {
    flexDirection: 'column'
  },
  transactionName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333'
  },
  transactionType: {
    fontSize: 12,
    color: '#555'
  },
  transactionDate: {
    fontSize: 12,
    color: '#999'
  },
  transactionAmountMinus: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold'
  },
  transactionAmountPlus: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold'
  }
});
