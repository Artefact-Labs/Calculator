State listOP = []
State memoryStack = []
	
Mutation addOp (state, op) { 
	state.listOP.push(op)
}
	

Mutation addToMemory (state, op) { 
	state.memoryStack.push(op)
}
Mutation removeFromMemory (state) { 
	state.memoryStack.pop()
}
Mutation clearMemory (state) { 
	state.memoryStack.splice(0, state.memoryStack.length)
}
Mutation memoryAdd (state, op) { 
	if(state.memoryStack.length<1) return
	let tmp = parseFloat(state.memoryStack[state.memoryStack.length-1]) + parseFloat(op)
	state.memoryStack.pop()
	state.memoryStack.push(tmp)
}
Mutation memoryRemove (state, op) { 
	if(state.memoryStack.length<1) return
	let tmp = parseFloat(state.memoryStack[state.memoryStack.length-1]) - parseFloat(op)
	state.memoryStack.pop()
	state.memoryStack.push(tmp)
}