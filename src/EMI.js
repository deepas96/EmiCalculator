
import React, { Component } from 'react';
import { Dimensions, View, FlatList, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'



const { width, height } = Dimensions.get('screen')


class EMI extends Component {


    constructor(props) {
        super(props)

        this.state = {
            amount: 10000,
            rate: 7.5, 
            tenure: 5, 
            emi: 0,
            interest: 0,
            showResult: false,
            totalInt: 0,
            totalPaid: 0,
        }
    }

    componentDidMount() {

    }

    renderHeader = () => {
        return(
            <View style = {{height: 44, backgroundColor: "#05222222", justifyContent: 'center'}}>
                <Text style = {{alignSelf:'center', fontWeight: 'bold'}}>EMI CALCULATOR</Text>

            </View>
        )
    }

    calculateEMI(){
        this.setState({showResult: true})
        let int, total, totalInterest, totalPayment = 0;
        const {amount, rate, tenure} = this.state
        int = (amount * (rate * 0.01))/tenure;
        total = ((amount / tenure) + int).toFixed(2);
        totalInterest = (int * tenure).toFixed(2);
        totalPaid = totalInterest + amount;
        console.log("EMI to pay:", total)
        this.setState({emi: total, interest: int.toFixed(2), totalInt: totalInterest, totalPaid: totalPayment})
    }


    render(){
        const { amount, rate, tenure, showResult} = this.state
        return(
            <SafeAreaView style = {{flex:1}}>
                {this.renderHeader()}
                <View style = {{justifyContent:'center', padding: 20}}>
                    <TextInput
                        allowFontScaling={false}
                        value = {amount}
                        style={styles.input}
                        onChangeText={(text) => this.setState({amount: text})}
                        autoCapitalize = {true}
                        returnKeyType = 'next'
                        keyboardType = 'default'
                        placeholder= "Enter Loan Amount"
                        
                    />
                    <TextInput
                        allowFontScaling={false}
                        value = {rate}
                        style={styles.input}
                        onChangeText={(text) => this.setState({rate: text})}
                        autoCapitalize = {true}
                        returnKeyType = 'next'
                        keyboardType = 'default'
                        placeholder= "Enter Interest Rate"

                        
                    />
                    <TextInput
                        allowFontScaling={false}
                        value = {tenure}
                        style={styles.input}
                        onChangeText={(text) => this.setState({tenure: text})}
                        autoCapitalize = {true}
                        returnKeyType = 'next'
                        keyboardType = 'default'
                        placeholder= "Enter Tenure (In Months)"

                        
                    />

                    <TouchableOpacity style = {styles.button} onPress={() => this.calculateEMI()}>
                        <Text>Calculate</Text>
                    </TouchableOpacity>
                    {
                        showResult
                        &&
                        <View>
                            <Text>{`Loan EMI: ${this.state.emi}`}</Text>
                            <Text>{`Total Interest Payable: ${parseInt(this.state.interest * tenure)}`}</Text>
                            <Text>{`Total Payment: ${parseInt(this.state.interest * tenure) + parseInt(this.state.amount)}`}</Text>
                        </View>

                    }

                </View>
            </SafeAreaView>
        )
    }
    
}


export default EMI


const styles = StyleSheet.create({
    input:{
        alignSelf:'center', alignItems:'center', padding:10, width: width-20, height:50, margin:10,
        borderWidth:1, borderRadius:5, borderColor:'#ccc'
    },
    button:{
        width: width-40, height: 50, margin:10, backgroundColor: "#abc", justifyContent:'center', alignItems:'center', alignSelf:'center'
    }
})
