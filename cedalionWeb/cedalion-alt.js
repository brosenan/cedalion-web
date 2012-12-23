[app] logicCode = ...
[app] programCode = ...
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#binOp" , vars [0]    ] , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#type"  ]    ] , ["[]"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "T"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#defAtom" , ["::" , ["/Functional#numPlus"  ] , ["/Functional#binOp" , ["/bootstrap#number"  ]   ]    ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#numPlus"  ] , ["/Functional#binOp" , ["/bootstrap#number"  ]   ]    ] , ["/bootstrap#label" , "+"   ]    ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#applyBinOp" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#expr" , vars [3]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [3]    ]    ] , ["." , ["::" , vars [1]  , ["/Functional#binOp" , vars [3]    ]    ] , ["." , ["::" , vars [2]  , ["/Functional#expr" , vars [3]    ]    ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Arg1"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "Arg2"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#applyBinOp" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#expr" , vars [3]    ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [3]    ]    ]   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#binOp" , vars [3]    ]    ]   ] , ["." , ["/bootstrap#vis" , ["::" , vars [2]  , ["/Functional#expr" , vars [3]    ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Arg1"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "Arg2"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#adapter" , ["::" , vars [0]  , ["/Functional#binOp" , vars [1]    ]    ] , ["::" , ["/Functional#applyBinOp" , vars [2]  , vars [0]  , vars [3]      ] , ["/Functional#expr" , vars [1]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "Arg1"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "Arg2"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/Functional#def" , ["/Functional#applyBinOp" , vars [0]  , ["/Functional#numPlus"  ] , vars [1]      ] , ["/bootstrap#number"  ] , ["/Functional#where" , ["/Functional#const" , vars [2]    ] , ["," , ["/Functional#eval" , vars [0]  , ["/bootstrap#number"  ] , vars [3]      ] , ["," , ["/Functional#eval" , vars [1]  , ["/bootstrap#number"  ] , vars [4]      ] , ["builtin#plus" , vars [3]  , vars [4]  , vars [2]      ]    ]    ]    ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "Arg1"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "Arg2"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "V"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "V1"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "V2"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#applyBinOp" , ["/Functional#const" , 1   ] , ["/Functional#numPlus"  ] , ["/Functional#const" , 2   ]     ] , ["/bootstrap#number"  ] , 3     ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#applyBinOpList" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#expr" , ["/bootstrap#list" , vars [3]    ]   ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#list" , vars [3]    ]   ]    ] , ["." , ["::" , vars [1]  , ["/Functional#binOp" , vars [3]    ]    ] , ["." , ["::" , vars [2]  , ["/Functional#expr" , ["/bootstrap#list" , vars [3]    ]   ]    ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "L1"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "L2"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#applyBinOpList" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#expr" , ["/bootstrap#list" , vars [3]    ]   ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#list" , vars [3]    ]   ]    ]   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#binOp" , vars [3]    ]    ]   ] , ["." , ["/bootstrap#vis" , ["::" , vars [2]  , ["/Functional#expr" , ["/bootstrap#list" , vars [3]    ]   ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "L1"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "L2"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#adapter" , ["::" , vars [0]  , ["/Functional#binOp" , vars [1]    ]    ] , ["::" , ["/Functional#applyBinOpList" , vars [2]  , vars [0]  , vars [3]      ] , ["/Functional#expr" , ["/bootstrap#list" , vars [1]    ]   ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "L1"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "L2"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (20  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/Functional#def" , ["/Functional#applyBinOpList" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#list" , vars [3]    ] , ["/Functional#where" , ["/Functional#const" , ["." , vars [4]  , vars [5]     ]   ] , ["," , ["/Functional#eval" , vars [0]  , ["/bootstrap#list" , vars [3]    ] , ["." , vars [6]  , vars [7]     ]     ] , ["," , ["/Functional#eval" , vars [2]  , ["/bootstrap#list" , vars [3]    ] , ["." , vars [8]  , vars [9]     ]     ] , ["," , ["/Functional#eval" , ["/Functional#applyBinOpList" , ["/Functional#const" , vars [7]    ] , vars [1]  , ["/Functional#const" , vars [9]    ]     ] , ["/bootstrap#list" , vars [3]    ] , vars [5]      ] , ["/Functional#eval" , ["/Functional#applyBinOp" , ["/Functional#const" , vars [6]    ] , vars [1]  , ["/Functional#const" , vars [8]    ]     ] , vars [3]  , vars [4]      ]    ]    ]    ]    ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [10]     ] , "L1"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [11]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [12]     ] , "L2"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [13]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [14]     ] , "First"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [15]     ] , "Rest"    ] , ["." , ["builtin#varName" , ["::" , vars [6]  , vars [16]     ] , "L11"    ] , ["." , ["builtin#varName" , ["::" , vars [7]  , vars [17]     ] , "L1Prime"    ] , ["." , ["builtin#varName" , ["::" , vars [8]  , vars [18]     ] , "L21"    ] , ["." , ["builtin#varName" , ["::" , vars [9]  , vars [19]     ] , "L2Prime"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/Functional#def" , ["/Functional#applyBinOpList" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#list" , vars [3]    ] , ["/Functional#where" , ["/Functional#const" , ["[]"  ]   ] , ["," , ["/Functional#eval" , vars [0]  , ["/bootstrap#list" , vars [3]    ] , ["[]"  ]     ] , ["/Functional#eval" , vars [2]  , ["/bootstrap#list" , vars [3]    ] , ["[]"  ]     ]    ]    ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "L1"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "L2"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#applyBinOpList" , ["/Functional#const" , ["." , 1 , ["." , 2 , ["." , 3 , ["[]"  ]    ]    ]    ]   ] , ["/Functional#numPlus"  ] , ["/Functional#applyBinOpList" , ["/Functional#const" , ["." , 4 , ["." , 5 , ["." , 6 , ["[]"  ]    ]    ]    ]   ] , ["/Functional#numPlus"  ] , ["/Functional#const" , ["." , 3 , ["." , 2 , ["." , 1 , ["[]"  ]    ]    ]    ]   ]     ]     ] , ["/bootstrap#list" , ["/bootstrap#number"  ]   ] , ["." , 8 , ["." , 9 , ["." , 10 , ["[]"  ]    ]    ]    ]     ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#applyBinOpListScalar" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#expr" , ["/bootstrap#list" , vars [3]    ]   ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#list" , vars [3]    ]   ]    ] , ["." , ["::" , vars [1]  , ["/Functional#binOp" , vars [3]    ]    ] , ["." , ["::" , vars [2]  , ["/Functional#expr" , vars [3]    ]    ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "List"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "Scalar"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#applyBinOpListScalar" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#expr" , ["/bootstrap#list" , vars [3]    ]   ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#list" , vars [3]    ]   ]    ]   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#binOp" , vars [3]    ]    ]   ] , ["." , ["/bootstrap#vis" , ["::" , vars [2]  , ["/Functional#expr" , vars [3]    ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "List"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "Scalar"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#adapter" , ["::" , vars [0]  , ["/Functional#binOp" , vars [1]    ]    ] , ["::" , ["/Functional#applyBinOpListScalar" , vars [2]  , vars [0]  , vars [3]      ] , ["/Functional#expr" , ["/bootstrap#list" , vars [1]    ]   ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "List"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "Scalar"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (16  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/Functional#def" , ["/Functional#applyBinOpListScalar" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#list" , vars [3]    ] , ["/Functional#where" , ["/Functional#const" , ["." , vars [4]  , vars [5]     ]   ] , ["," , ["/Functional#eval" , vars [0]  , ["/bootstrap#list" , vars [3]    ] , ["." , vars [6]  , vars [7]     ]     ] , ["," , ["/Functional#eval" , ["/Functional#applyBinOp" , ["/Functional#const" , vars [6]    ] , vars [1]  , vars [2]      ] , vars [3]  , vars [4]      ] , ["/Functional#eval" , ["/Functional#applyBinOpListScalar" , ["/Functional#const" , vars [7]    ] , vars [1]  , vars [2]      ] , ["/bootstrap#list" , vars [3]    ] , vars [5]      ]    ]    ]    ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [8]     ] , "L"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [9]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [10]     ] , "Scalar"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [11]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [12]     ] , "First"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [13]     ] , "Rest"    ] , ["." , ["builtin#varName" , ["::" , vars [6]  , vars [14]     ] , "L1"    ] , ["." , ["builtin#varName" , ["::" , vars [7]  , vars [15]     ] , "LPrime"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/Functional#def" , ["/Functional#applyBinOpListScalar" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#list" , vars [3]    ] , ["/Functional#where" , ["/Functional#const" , ["[]"  ]   ] , ["/Functional#eval" , vars [0]  , ["/bootstrap#list" , vars [3]    ] , ["[]"  ]     ]    ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "L"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "Scalar"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#applyBinOpListScalar" , ["/Functional#const" , ["." , 1 , ["." , 2 , ["." , 3 , ["[]"  ]    ]    ]    ]   ] , ["/Functional#numPlus"  ] , ["/Functional#const" , 2   ]     ] , ["/bootstrap#list" , ["/bootstrap#number"  ]   ] , ["." , 3 , ["." , 4 , ["." , 5 , ["[]"  ]    ]    ]    ]     ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#applyBinOpSet" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#set" , vars [3]    ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#set" , vars [3]    ]    ] , ["." , ["::" , vars [1]  , ["/Functional#binOp" , vars [3]    ]    ] , ["." , ["::" , vars [2]  , ["/bootstrap#set" , vars [3]    ]    ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "S1"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "S2"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#applyBinOpSet" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#set" , vars [3]    ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/bootstrap#set" , vars [3]    ]    ]   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#binOp" , vars [3]    ]    ]   ] , ["." , ["/bootstrap#vis" , ["::" , vars [2]  , ["/bootstrap#set" , vars [3]    ]    ]   ] , ["[]"  ]    ]    ]    ] , ["cpi#middle"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "S1"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "S2"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#adapter" , ["::" , vars [0]  , ["/Functional#binOp" , vars [1]    ]    ] , ["::" , ["/Functional#applyBinOpSet" , vars [2]  , vars [0]  , vars [3]      ] , ["/bootstrap#set" , vars [1]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "S1"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "S2"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (12  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#setDef" , ["/Functional#applyBinOpSet" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#eset" , ["/Functional#applyBinOp" , ["/Functional#const" , vars [3]    ] , vars [1]  , ["/Functional#const" , vars [4]    ]     ] , ["," , ["/bootstrap#member" , vars [3]  , vars [0]  , vars [5]      ] , ["/bootstrap#member" , vars [4]  , vars [2]  , vars [5]      ]    ]    ] , vars [5]      ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [6]     ] , "S1"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [7]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [8]     ] , "S2"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [9]     ] , "A1"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [10]     ] , "A2"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [11]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#unitTest" , ["/bootstrap#member" , 3 , ["/Functional#applyBinOpSet" , ["/bootstrap#singleton" , 1   ] , ["/Functional#numPlus"  ] , ["/bootstrap#singleton" , 2   ]     ] , ["/bootstrap#number"  ]     ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#reduce" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#binOp" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , ["/bootstrap#list" , vars [2]    ]   ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "L"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#reduce" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#bold" , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#binOp" , vars [2]    ]    ]   ]   ] , ["." , ["/bootstrap#brackets" , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , ["/bootstrap#list" , vars [2]    ]   ]    ]   ] , 40 , 41     ] , ["[]"  ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "L"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (12  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/Functional#def" , ["/Functional#reduce" , vars [0]  , vars [1]     ] , vars [2]  , ["/Functional#where" , ["/Functional#applyBinOp" , ["/Functional#const" , vars [3]    ] , vars [0]  , ["/Functional#reduce" , vars [0]  , ["/Functional#const" , ["." , vars [4]  , vars [5]     ]   ]    ]     ] , ["/Functional#eval" , vars [1]  , ["/bootstrap#list" , vars [2]    ] , ["." , vars [3]  , ["." , vars [4]  , vars [5]     ]    ]     ]    ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [6]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [7]     ] , "L"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [8]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [9]     ] , "L1"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [10]     ] , "L2"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [11]     ] , "LPrime"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/Functional#def" , ["/Functional#reduce" , vars [0]  , vars [1]     ] , vars [2]  , ["/Functional#where" , ["/Functional#const" , vars [3]    ] , ["/Functional#eval" , vars [1]  , ["/bootstrap#list" , vars [2]    ] , ["." , vars [3]  , ["[]"  ]    ]     ]    ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "L"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "L1"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#reduce" , ["/Functional#numPlus"  ] , ["/Functional#const" , ["." , 1 , ["." , 2 , ["." , 3 , ["[]"  ]    ]    ]    ]   ]    ] , ["/bootstrap#number"  ] , 6     ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#defAtom" , ["::" , ["/Functional#minus"  ] , ["/Functional#binOp" , ["/bootstrap#number"  ]   ]    ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#minus"  ] , ["/Functional#binOp" , ["/bootstrap#number"  ]   ]    ] , ["/bootstrap#label" , "-"   ]    ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/Functional#def" , ["/Functional#applyBinOp" , vars [0]  , ["/Functional#minus"  ] , vars [1]      ] , ["/bootstrap#number"  ] , ["/Functional#minus" , vars [0]  , vars [1]     ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "B"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#defAtom" , ["::" , ["/Functional#times"  ] , ["/Functional#binOp" , ["/bootstrap#number"  ]   ]    ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#times"  ] , ["/Functional#binOp" , ["/bootstrap#number"  ]   ]    ] , ["/bootstrap#label" , "*"   ]    ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/Functional#def" , ["/Functional#applyBinOp" , vars [0]  , ["/Functional#times"  ] , vars [1]      ] , ["/bootstrap#number"  ] , ["/Functional#mult" , vars [0]  , vars [1]     ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "B"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#defAtom" , ["::" , ["/Functional#divBy"  ] , ["/Functional#binOp" , ["/bootstrap#number"  ]   ]    ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#divBy"  ] , ["/Functional#binOp" , ["/bootstrap#number"  ]   ]    ] , ["/bootstrap#label" , "/"   ]    ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/Functional#def" , ["/Functional#applyBinOp" , vars [0]  , ["/Functional#divBy"  ] , vars [1]      ] , ["/bootstrap#number"  ] , ["/Functional#div" , vars [0]  , vars [1]     ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "B"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#valueApplyBinOp" , vars [0]  , vars [1]  , vars [2]  , vars [3]  , vars [4]        ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , vars [4]     ] , ["." , ["::" , vars [1]  , ["/Functional#binOp" , vars [4]    ]    ] , ["." , ["::" , vars [2]  , vars [4]     ] , ["." , ["::" , vars [3]  , ["/Functional#expr" , vars [4]    ]    ] , ["." , ["::" , vars [4]  , ["/bootstrap#type"  ]    ] , ["[]"  ]    ]    ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "APrime"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "BPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "V"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#valueApplyBinOp" , vars [0]  , vars [1]  , vars [2]  , vars [3]  , vars [4]        ] , ["/bootstrap#pred"  ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [4]  , ["/bootstrap#type"  ]    ]   ] , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , vars [4]     ]   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#binOp" , vars [4]    ]    ]   ] , ["." , ["/bootstrap#vis" , ["::" , vars [2]  , vars [4]     ]   ] , ["." , ["/bootstrap#label" , "="   ] , ["." , ["/bootstrap#vis" , ["::" , vars [3]  , ["/Functional#expr" , vars [4]    ]    ]   ] , ["[]"  ]    ]    ]    ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "APrime"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "BPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "V"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , [":-" , ["/Functional#valueApplyBinOp" , vars [0]  , vars [1]  , vars [2]  , vars [3]  , vars [4]        ] , ["builtin#fail"  ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "APrime"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "BPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "V"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (14  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/binop.ced" , ["/bootstrap#disabled" , ["/Functional#def" , ["/Functional#applyBinOp" , vars [0]  , vars [1]  , vars [2]      ] , vars [3]  , ["/Functional#where" , vars [4]  , ["," , ["/Functional#eval" , vars [0]  , vars [3]  , vars [5]      ] , ["," , ["/Functional#eval" , vars [2]  , vars [3]  , vars [6]      ] , ["/Functional#valueApplyBinOp" , vars [5]  , vars [1]  , vars [6]  , vars [4]  , vars [3]        ]    ]    ]    ]     ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [7]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [8]     ] , "Op"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [9]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [10]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [11]     ] , "V"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [12]     ] , "APrime"    ] , ["." , ["builtin#varName" , ["::" , vars [6]  , vars [13]     ] , "BPrime"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/case.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#cases" , vars [0]  , vars [1]     ] , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#type"  ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "ExprType"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/case.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#switch" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#expr" , vars [3]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [2]  , ["/Functional#cases" , vars [1]  , vars [3]     ]    ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "ExprType"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "Cases"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/case.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#switch" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#expr" , vars [3]    ]    ] , ["/bootstrap#vert" , ["." , ["/bootstrap#horiz" , ["." , ["/bootstrap#label" , "case"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ]   ] , ["." , ["/bootstrap#label" , "::"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/bootstrap#type"  ]    ]   ] , ["." , ["/bootstrap#label" , "of"   ] , ["[]"  ]    ]    ]    ]    ]    ]   ] , ["." , ["/bootstrap#horiz" , ["." , ["/bootstrap#label" , "    "   ] , ["." , ["/bootstrap#vis" , ["::" , vars [2]  , ["/Functional#cases" , vars [1]  , vars [3]     ]    ]   ] , ["[]"  ]    ]    ]   ] , ["[]"  ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "ExprType"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "Cases"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (7  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/case.ced" , ["/bootstrap#alias" , ["::" , ["/Functional#switch" , vars [0]  , vars [1]  , ["/Functional#otherwise" , vars [2]    ]     ] , ["/Functional#expr" , vars [3]    ]    ] , "case"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "ExprType"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [6]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (7  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/case.ced" , ["/bootstrap#disabled" , ["/bootstrap#default" , ["::" , ["/Functional#switch" , vars [0]  , vars [1]  , ["/Functional#otherwise" , vars [2]    ]     ] , ["/Functional#expr" , vars [3]    ]    ]   ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "ExprType"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [6]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (12  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/case.ced" , [":-" , ["/Functional#eval" , ["/Functional#switch" , vars [0]  , vars [1]  , vars [2]      ] , vars [3]  , vars [4]      ] , ["," , ["/Functional#eval" , vars [0]  , vars [1]  , vars [5]      ] , ["/Functional#evalCases" , vars [2]  , vars [1]  , vars [3]  , vars [5]  , vars [4]        ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [6]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [7]     ] , "ExprType"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [8]     ] , "Cases"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [9]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [10]     ] , "Result"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [11]     ] , "Value"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/case.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#evalCases" , vars [0]  , vars [1]  , vars [2]  , vars [3]  , vars [4]        ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/Functional#cases" , vars [1]  , vars [2]     ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [2]  , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [3]  , vars [1]     ] , ["." , ["::" , vars [4]  , vars [2]     ] , ["[]"  ]    ]    ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "Cases"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "ExprType"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "Value"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "Result"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/case.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#case" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#cases" , vars [3]  , vars [4]     ]    ] , ["." , ["::" , vars [0]  , vars [3]     ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , vars [4]    ]    ] , ["." , ["::" , vars [2]  , ["/Functional#cases" , vars [3]  , vars [4]     ]    ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "Pattern"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "Next"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "ExprType"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/case.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#case" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#cases" , vars [3]  , vars [4]     ]    ] , ["/bootstrap#vert" , ["." , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , vars [3]     ]   ] , ["." , ["/bootstrap#symbol" , 8658   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , vars [4]    ]    ]   ] , ["[]"  ]    ]    ]    ]   ] , ["." , ["/bootstrap#vis" , ["::" , vars [2]  , ["/Functional#cases" , vars [3]  , vars [4]     ]    ]   ] , ["[]"  ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "Pattern"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "Next"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "ExprType"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (14  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/case.ced" , [":-" , ["/Functional#evalCases" , ["/Functional#case" , vars [0]  , vars [1]  , vars [2]      ] , vars [3]  , vars [4]  , vars [5]  , vars [6]        ] , ["builtin#if" , ["=" , ["::" , vars [0]  , vars [3]     ] , ["::" , vars [5]  , vars [3]     ]    ] , ["/Functional#eval" , vars [1]  , vars [4]  , vars [6]      ] , ["/Functional#evalCases" , vars [2]  , vars [3]  , vars [4]  , vars [5]  , vars [6]        ]     ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [7]     ] , "Pattern"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [8]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [9]     ] , "Next"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [10]     ] , "ExprType"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [11]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [12]     ] , "Value"    ] , ["." , ["builtin#varName" , ["::" , vars [6]  , vars [13]     ] , "Result"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/case.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#otherwise" , vars [0]    ] , ["/Functional#cases" , vars [1]  , vars [2]     ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["[]"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "ExprType"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/case.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#otherwise" , vars [0]    ] , ["/Functional#cases" , vars [1]  , vars [2]     ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#label" , "otherwise:"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["[]"  ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "ExprType"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/case.ced" , [":-" , ["/Functional#evalCases" , ["/Functional#otherwise" , vars [0]    ] , vars [1]  , vars [2]  , vars [3]  , vars [4]        ] , ["/Functional#eval" , vars [0]  , vars [2]  , vars [4]      ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "ExprType"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "Value"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "Result"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (12  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/case.ced" , ["/bootstrap#contextMenuEntry" , ["::" , vars [0]  , ["/Functional#cases" , vars [1]  , vars [2]     ]    ] , vars [3]  , vars [4]  , "Insert Case" , ["cpi#edit" , vars [4]  , ["::" , ["/Functional#case" , vars [5]  , vars [6]  , vars [0]      ] , ["/Functional#cases" , vars [1]  , vars [2]     ]    ] , vars [3]      ]       ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [7]     ] , "Cases"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [8]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [9]     ] , "T2"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [10]     ] , "VNs"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [11]     ] , "Path"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (12  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/case.ced" , ["/bootstrap#contextMenuEntry" , ["::" , ["/Functional#case" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#cases" , vars [3]  , vars [4]     ]    ] , vars [5]  , vars [6]  , "Remove Case" , ["cpi#edit" , vars [6]  , ["::" , vars [2]  , ["/Functional#cases" , vars [3]  , vars [4]     ]    ] , vars [5]      ]       ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "Cases"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "T2"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [10]     ] , "VNs"    ] , ["." , ["builtin#varName" , ["::" , vars [6]  , vars [11]     ] , "Path"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#if" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#expr" , vars [3]    ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , vars [3]    ]    ] , ["." , ["::" , vars [2]  , ["/Functional#expr" , vars [3]    ]    ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Cond"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Then"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "Else"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#if" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#expr" , vars [3]    ]    ] , ["/bootstrap#vert" , ["." , ["/bootstrap#horiz" , ["." , ["/bootstrap#label" , "if"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/bootstrap#pred"  ]    ]   ] , ["." , ["/bootstrap#label" , ":"   ] , ["[]"  ]    ]    ]    ]   ] , ["." , ["/bootstrap#horiz" , ["." , ["/bootstrap#label" , "    "   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , vars [3]    ]    ]   ] , ["[]"  ]    ]    ]   ] , ["." , ["/bootstrap#horiz" , ["." , ["/bootstrap#label" , "else:"   ] , ["[]"  ]    ]   ] , ["." , ["/bootstrap#horiz" , ["." , ["/bootstrap#label" , "    "   ] , ["." , ["/bootstrap#vis" , ["::" , vars [2]  , ["/Functional#expr" , vars [3]    ]    ]   ] , ["[]"  ]    ]    ]   ] , ["[]"  ]    ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Cond"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Then"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "Else"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , [":-" , ["/Functional#eval" , ["/Functional#if" , vars [0]  , vars [1]  , vars [2]      ] , vars [3]  , vars [4]      ] , ["builtin#if" , vars [0]  , ["/Functional#eval" , vars [1]  , vars [3]  , vars [4]      ] , ["/Functional#eval" , vars [2]  , vars [3]  , vars [4]      ]     ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "Cond"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "Then"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "Else"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "V"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#eq" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [2]  , ["/bootstrap#type"  ]    ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#eq" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["." , ["/bootstrap#horiz" , ["." , ["/bootstrap#label" , "="   ] , ["." , ["/bootstrap#halfSize" , ["/bootstrap#vis" , ["::" , vars [2]  , ["/bootstrap#type"  ]    ]   ]   ] , ["[]"  ]    ]    ] , ["cpi#top"  ]    ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , [":-" , ["/Functional#eq" , vars [0]  , vars [1]  , vars [2]      ] , ["," , ["/Functional#eval" , vars [0]  , vars [2]  , vars [3]      ] , ["," , ["/Functional#eval" , vars [1]  , vars [2]  , vars [4]      ] , ["builtin#equals" , ["::" , vars [3]  , vars [2]     ] , ["::" , vars [4]  , vars [2]     ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "AV"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "BV"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , ["annotation#comment" , ["/bootstrap#signature" , ["::" , ["builtin#greaterThen" , vars [0]  , vars [1]     ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#number"  ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#number"  ]    ] , ["[]"  ]    ]    ]    ] , "Succeeds if A > B"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "B"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , ["/bootstrap#projection" , ["::" , ["builtin#greaterThen" , vars [0]  , vars [1]     ] , ["/bootstrap#pred"  ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/bootstrap#number"  ]    ]   ] , ["." , ["/bootstrap#label" , ">"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/bootstrap#number"  ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "B"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#gt" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [2]  , ["/bootstrap#type"  ]    ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#gt" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["." , ["/bootstrap#horiz" , ["." , ["/bootstrap#label" , ">"   ] , ["." , ["/bootstrap#halfSize" , ["/bootstrap#vis" , ["::" , vars [2]  , ["/bootstrap#type"  ]    ]   ]   ] , ["[]"  ]    ]    ] , ["cpi#top"  ]    ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , ["/bootstrap#alias" , ["::" , ["/Functional#gt" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ">"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , [":-" , ["/Functional#gt" , vars [0]  , vars [1]  , ["/bootstrap#number"  ]     ] , ["," , ["/Functional#eval" , vars [0]  , ["/bootstrap#number"  ] , vars [2]      ] , ["," , ["/Functional#eval" , vars [1]  , ["/bootstrap#number"  ] , vars [3]      ] , ["builtin#greaterThen" , vars [2]  , vars [3]     ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "AV"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "BV"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#max" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , ["/Functional#def" , ["/Functional#max" , vars [0]  , vars [1]     ] , vars [2]  , ["/Functional#if" , ["/Functional#gt" , vars [0]  , vars [1]  , vars [2]      ] , vars [0]  , vars [1]      ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#max" , ["/Functional#wrap" , 2   ] , ["/Functional#wrap" , 3   ]    ] , ["/bootstrap#number"  ] , 3     ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , ["/bootstrap#unitTest" , ["\\+" , ["/Functional#eval" , ["/Functional#max" , ["/Functional#wrap" , 2   ] , ["/Functional#wrap" , 3   ]    ] , ["/bootstrap#number"  ] , 2     ]   ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#ge" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [2]  , ["/bootstrap#type"  ]    ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#ge" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["." , ["/bootstrap#horiz" , ["." , ["/bootstrap#symbol" , 8805   ] , ["." , ["/bootstrap#halfSize" , ["/bootstrap#vis" , ["::" , vars [2]  , ["/bootstrap#type"  ]    ]   ]   ] , ["[]"  ]    ]    ] , ["cpi#top"  ]    ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , ["/bootstrap#alias" , ["::" , ["/Functional#ge" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ">="    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/conditionals.ced" , [":-" , ["/Functional#ge" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#or" , ["/Functional#gt" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#eq" , vars [0]  , vars [1]  , vars [2]      ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/constant.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#const" , vars [0]    ] , ["/Functional#expr" , vars [1]    ]    ] , ["." , ["::" , vars [0]  , vars [1]     ] , ["[]"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Const"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/constant.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#const" , vars [0]    ] , ["/Functional#expr" , vars [1]    ]    ] , ["/bootstrap#raised" , ["/bootstrap#lineBorder" , ["/bootstrap#background" , ["/bootstrap#vis" , ["::" , vars [0]  , vars [1]     ]   ] , ["cpi#rgb" , 255 , 200 , 128     ]    ] , 5 , ["cpi#rgb" , 255 , 200 , 128     ]     ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Const"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/constant.ced" , ["/bootstrap#adapter" , ["::" , vars [0]  , vars [1]     ] , ["::" , ["/Functional#const" , vars [0]    ] , ["/Functional#expr" , vars [1]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Const"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/constant.ced" , [":-" , ["/Functional#eval" , ["/Functional#const" , vars [0]    ] , vars [1]  , vars [0]      ] , ["builtin#true"  ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Const"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (14  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/constant.ced" , ["annotation#shrink" , ["/bootstrap#signature" , ["::" , ["/Functional#wrapToConst" , vars [0]  , vars [1]  , vars [2]  , vars [3]  , vars [4]  , vars [5]  , vars [6]          ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [2]  , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [3]  , ["/bootstrap#list" , ["/bootstrap#varName"  ]   ]    ] , ["." , ["::" , vars [4]  , ["/bootstrap#list" , ["/bootstrap#varName"  ]   ]    ] , ["." , ["::" , vars [5]  , ["/bootstrap#number"  ]    ] , ["." , ["::" , vars [6]  , ["/bootstrap#number"  ]    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]    ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [7]     ] , "WrapExpr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [8]     ] , "ConstExpr"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [9]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [10]     ] , "VNsIn"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [11]     ] , "VNsOut"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [12]     ] , "IndexIn"    ] , ["." , ["builtin#varName" , ["::" , vars [6]  , vars [13]     ] , "IndexOut"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (16  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/constant.ced" , ["annotation#shrink" , [":-" , ["/Functional#wrapToConst" , ["/Functional#wrap" , vars [0]    ] , ["/Functional#where" , ["/Functional#const" , vars [1]    ] , vars [2]     ] , vars [3]  , vars [4]  , vars [5]  , vars [6]  , vars [7]          ] , ["/Functional#wrapToConst" , vars [0]  , vars [1]  , ["builtin#true"  ] , vars [2]  , vars [3]  , vars [4]  , vars [5]  , vars [6]  , vars [7]            ]    ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [8]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [9]     ] , "C"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [10]     ] , "Goal"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [11]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [12]     ] , "VNsIn"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [13]     ] , "VNsOut"    ] , ["." , ["builtin#varName" , ["::" , vars [6]  , vars [14]     ] , "IndexIn"    ] , ["." , ["builtin#varName" , ["::" , vars [7]  , vars [15]     ] , "IndexOut"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (16  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/constant.ced" , ["annotation#shrink" , ["/bootstrap#signature" , ["::" , ["/Functional#wrapToConstArgs" , vars [0]  , vars [1]  , vars [2]  , vars [3]  , vars [4]  , vars [5]  , vars [6]  , vars [7]           ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#list" , ["/bootstrap#typedTerm"  ]   ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#list" , ["/bootstrap#typedTerm"  ]   ]    ] , ["." , ["::" , vars [2]  , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [3]  , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [4]  , ["/bootstrap#list" , ["/bootstrap#varName"  ]   ]    ] , ["." , ["::" , vars [5]  , ["/bootstrap#list" , ["/bootstrap#varName"  ]   ]    ] , ["." , ["::" , vars [6]  , ["/bootstrap#number"  ]    ] , ["." , ["::" , vars [7]  , ["/bootstrap#number"  ]    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]    ]    ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [8]     ] , "Args"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [9]     ] , "ConstArgs"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [10]     ] , "GoalIn"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [11]     ] , "GoalOut"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [12]     ] , "VNsIn"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [13]     ] , "VNsOut"    ] , ["." , ["builtin#varName" , ["::" , vars [6]  , vars [14]     ] , "IndexIn"    ] , ["." , ["builtin#varName" , ["::" , vars [7]  , vars [15]     ] , "IndexOut"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/constant.ced" , [":-" , ["/Functional#wrapToConstArgs" , ["[]"  ] , ["[]"  ] , vars [0]  , vars [0]  , vars [1]  , vars [1]  , vars [2]  , vars [2]           ] , ["builtin#true"  ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Goal"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "VNs"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Index"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (34  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/constant.ced" , ["annotation#shrink" , [":-" , ["/Functional#wrapToConstArgs" , ["." , ["::" , vars [0]  , vars [1]     ] , vars [2]     ] , ["." , ["::" , vars [3]  , vars [1]     ] , vars [4]     ] , vars [5]  , vars [6]  , vars [7]  , vars [8]  , vars [9]  , vars [10]           ] , ["," , ["builtin#if" , ["=" , ["::" , vars [0]  , vars [1]     ] , ["::" , ["/Functional#unwrap" , vars [11]    ] , vars [1]     ]    ] , ["," , ["/Functional#eval" , ["/Functional#concat" , ["/Functional#wrap" , "Value"   ] , ["/Functional#num2str" , ["/Functional#wrap" , vars [9]    ]   ]    ] , ["/bootstrap#string"  ] , vars [12]      ] , ["," , ["=" , ["::" , vars [13]  , ["/bootstrap#list" , ["/bootstrap#varName"  ]   ]    ] , ["::" , ["." , ["builtin#varName" , ["::" , vars [14]  , vars [1]     ] , vars [12]     ] , vars [7]     ] , ["/bootstrap#list" , ["/bootstrap#varName"  ]   ]    ]    ] , ["," , ["=" , ["::" , vars [3]  , vars [1]     ] , ["::" , vars [14]  , vars [1]     ]    ] , ["," , ["=" , ["::" , vars [15]  , ["/bootstrap#pred"  ]    ] , ["::" , ["annotation#parentheses" , ["," , ["/Functional#eval" , vars [11]  , vars [1]  , vars [14]      ] , vars [5]     ]   ] , ["/bootstrap#pred"  ]    ]    ] , ["builtin#succ" , vars [9]  , vars [16]     ]    ]    ]    ]    ] , ["/Functional#wrapToConst" , vars [0]  , vars [3]  , vars [5]  , vars [15]  , vars [1]  , vars [7]  , vars [13]  , vars [9]  , vars [16]            ]     ] , ["/Functional#wrapToConstArgs" , vars [2]  , vars [4]  , vars [15]  , vars [6]  , vars [13]  , vars [8]  , vars [16]  , vars [10]           ]    ]    ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [17]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [18]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [19]     ] , "Args"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [20]     ] , "C"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [21]     ] , "ConstArgs"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [22]     ] , "GoalIn"    ] , ["." , ["builtin#varName" , ["::" , vars [6]  , vars [23]     ] , "GoalOut"    ] , ["." , ["builtin#varName" , ["::" , vars [7]  , vars [24]     ] , "VNsIn"    ] , ["." , ["builtin#varName" , ["::" , vars [8]  , vars [25]     ] , "VNsOut"    ] , ["." , ["builtin#varName" , ["::" , vars [9]  , vars [26]     ] , "IndexIn"    ] , ["." , ["builtin#varName" , ["::" , vars [10]  , vars [27]     ] , "IndexOut"    ] , ["." , ["builtin#varName" , ["::" , vars [11]  , vars [28]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [12]  , vars [29]     ] , "VarName"    ] , ["." , ["builtin#varName" , ["::" , vars [13]  , vars [30]     ] , "VNsMid"    ] , ["." , ["builtin#varName" , ["::" , vars [14]  , vars [31]     ] , "Var"    ] , ["." , ["builtin#varName" , ["::" , vars [15]  , vars [32]     ] , "GoalMid"    ] , ["." , ["builtin#varName" , ["::" , vars [16]  , vars [33]     ] , "IndexMid"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]    ]    ]    ]    ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (13  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/constant.ced" , ["/bootstrap#contextMenuEntry" , ["::" , ["/Functional#wrap" , vars [0]    ] , ["/Functional#expr" , vars [1]    ]    ] , vars [2]  , vars [3]  , "Convert Wrap to Const" , ["/bootstrap#where" , ["/bootstrap#doProc" , ["cpi#edit" , vars [3]  , ["::" , vars [4]  , ["/Functional#expr" , vars [1]    ]    ] , vars [5]      ]   ] , ["/Functional#wrapToConst" , ["/Functional#wrap" , vars [0]    ] , vars [4]  , vars [1]  , vars [2]  , vars [5]  , 1 , vars [6]          ]    ]       ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [7]     ] , "Wrap"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [8]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [9]     ] , "VNsIn"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [10]     ] , "Path"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [11]     ] , "ConstExpr"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [12]     ] , "VNsOut"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (18  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/constant.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#wrapToConst" , vars [0]  , vars [1]  , vars [2]  , vars [3]  , vars [4]  , vars [5]  , vars [6]  , vars [7]  , vars [8]            ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , vars [4]     ] , ["." , ["::" , vars [1]  , vars [4]     ] , ["." , ["::" , vars [2]  , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [3]  , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [4]  , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [5]  , ["/bootstrap#list" , ["/bootstrap#varName"  ]   ]    ] , ["." , ["::" , vars [6]  , ["/bootstrap#list" , ["/bootstrap#varName"  ]   ]    ] , ["." , ["::" , vars [7]  , ["/bootstrap#number"  ]    ] , ["." , ["::" , vars [8]  , ["/bootstrap#number"  ]    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [9]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [10]     ] , "C"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [11]     ] , "GoalIn"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [12]     ] , "GoalOut"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [13]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [14]     ] , "VNsIn"    ] , ["." , ["builtin#varName" , ["::" , vars [6]  , vars [15]     ] , "VNsOut"    ] , ["." , ["builtin#varName" , ["::" , vars [7]  , vars [16]     ] , "IndexIn"    ] , ["." , ["builtin#varName" , ["::" , vars [8]  , vars [17]     ] , "IndexOut"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (24  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/constant.ced" , ["annotation#shrink" , [":-" , ["/Functional#wrapToConst" , vars [0]  , vars [1]  , vars [2]  , vars [3]  , vars [4]  , vars [5]  , vars [6]  , vars [7]  , vars [8]            ] , ["builtin#if" , ["builtin#compound" , ["::" , vars [0]  , vars [4]     ]   ] , ["," , ["/bootstrap#safeParseTerm" , ["::" , vars [0]  , vars [4]     ] , vars [9]  , vars [10]      ] , ["," , ["/Functional#wrapToConstArgs" , vars [10]  , vars [11]  , vars [2]  , vars [3]  , vars [5]  , vars [6]  , vars [7]  , vars [8]           ] , ["builtin#parseTerm" , ["::" , vars [1]  , vars [4]     ] , vars [9]  , vars [11]      ]    ]    ] , ["," , ["=" , ["::" , vars [0]  , vars [4]     ] , ["::" , vars [1]  , vars [4]     ]    ] , ["," , ["=" , ["::" , vars [3]  , ["/bootstrap#pred"  ]    ] , ["::" , vars [2]  , ["/bootstrap#pred"  ]    ]    ] , ["," , ["=" , ["::" , vars [7]  , ["/bootstrap#number"  ]    ] , ["::" , vars [8]  , ["/bootstrap#number"  ]    ]    ] , ["=" , ["::" , vars [6]  , ["/bootstrap#list" , ["/bootstrap#varName"  ]   ]    ] , ["::" , vars [5]  , ["/bootstrap#list" , ["/bootstrap#varName"  ]   ]    ]    ]    ]    ]    ]     ]    ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [12]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [13]     ] , "C"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [14]     ] , "GoalIn"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [15]     ] , "GoalOut"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [16]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [17]     ] , "VNsIn"    ] , ["." , ["builtin#varName" , ["::" , vars [6]  , vars [18]     ] , "VNsOut"    ] , ["." , ["builtin#varName" , ["::" , vars [7]  , vars [19]     ] , "IndexIn"    ] , ["." , ["builtin#varName" , ["::" , vars [8]  , vars [20]     ] , "IndexOut"    ] , ["." , ["builtin#varName" , ["::" , vars [9]  , vars [21]     ] , "Name"    ] , ["." , ["builtin#varName" , ["::" , vars [10]  , vars [22]     ] , "Args"    ] , ["." , ["builtin#varName" , ["::" , vars [11]  , vars [23]     ] , "ConstArgs"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (13  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/constant.ced" , ["/bootstrap#tip" , ["::" , ["/Functional#wrap" , vars [0]    ] , ["/Functional#expr" , vars [1]    ]    ] , vars [2]  , vars [3]  , ["/bootstrap#where" , ["/bootstrap#doProc" , ["cpi#edit" , vars [2]  , ["::" , vars [4]  , ["/Functional#expr" , vars [1]    ]    ] , vars [5]      ]   ] , ["/Functional#wrapToConst" , ["/Functional#wrap" , vars [0]    ] , vars [4]  , vars [1]  , vars [3]  , vars [5]  , 1 , vars [6]          ]    ]      ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [7]     ] , "Wrap"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [8]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [9]     ] , "Path"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [10]     ] , "VNsIn"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [11]     ] , "ConstExpr"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [12]     ] , "VNsOut"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/constant.ced" , ["/bootstrap#sandbox" , ["::" , ["/Functional#wrap" , ["/logic1#nand" , ["/Functional#unwrap" , vars [0]    ] , ["/Functional#unwrap" , vars [1]    ]    ]   ] , ["/Functional#expr" , ["/logic1#bit"  ]   ]    ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "Y"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eset.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#eset" , vars [0]  , vars [1]     ] , ["/bootstrap#set" , vars [2]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#pred"  ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Goal"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eset.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#eset" , vars [0]  , vars [1]     ] , ["/bootstrap#set" , vars [2]    ]    ] , ["/bootstrap#brackets" , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["." , ["/bootstrap#color" , ["/bootstrap#box" , 1   ] , ["cpi#rgb" , 0 , 0 , 255     ]    ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/bootstrap#pred"  ]    ]   ] , ["[]"  ]    ]    ]    ] , ["cpi#middle"  ]    ] , 123 , 125     ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Goal"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eset.ced" , [":-" , ["/bootstrap#member" , vars [0]  , ["/Functional#eset" , vars [1]  , vars [2]     ] , vars [3]      ] , ["," , vars [2]  , ["/Functional#eval" , vars [1]  , vars [3]  , vars [0]      ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Elem"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "Goal"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#expr" , vars [0]    ] , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#type"  ]    ] , ["[]"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "Tau"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#eval" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [2]  , vars [1]     ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Tau"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Value"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#eval" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [2]  , vars [1]     ]   ] , ["." , ["/bootstrap#halfSize" , ["/bootstrap#horiz" , ["." , ["/bootstrap#label" , "::"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/bootstrap#type"  ]    ]   ] , ["[]"  ]    ]    ]   ]   ] , ["." , ["/bootstrap#symbol" , 8656   ] , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ]   ] , ["[]"  ]    ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Tau"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Value"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#alias" , ["::" , ["/Functional#eval" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , "<="    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Tau"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Value"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#defines" , [":-" , ["/Functional#eval" , vars [0]  , vars [1]  , vars [2]      ] , vars [3]     ] , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ] , ["/bootstrap#semanticDefinition"  ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Tau"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#minus" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Tau"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#minus" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["." , ["/bootstrap#label" , "-"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Tau"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#alias" , ["::" , ["/Functional#minus" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , "-"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Tau"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["annotation#comment" , ["/bootstrap#signature" , ["::" , ["builtin#minus" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#number"  ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#number"  ]    ] , ["." , ["::" , vars [2]  , ["/bootstrap#number"  ]    ] , ["[]"  ]    ]    ]    ]    ] , "Succeeds if C equals (numerically) AlphaPrime-BetaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "AlphaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "BetaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "C"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , [":-" , ["/Functional#eval" , ["/Functional#minus" , vars [0]  , vars [1]     ] , ["/bootstrap#number"  ] , vars [2]      ] , ["," , ["/Functional#eval" , vars [0]  , ["/bootstrap#number"  ] , vars [3]      ] , ["," , ["/Functional#eval" , vars [1]  , ["/bootstrap#number"  ] , vars [4]      ] , ["builtin#minus" , vars [3]  , vars [4]  , vars [2]      ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "Gamma"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "AlphaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "BetaPrime"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#mult" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Tau"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#mult" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["." , ["/bootstrap#label" , "*"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Tau"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#alias" , ["::" , ["/Functional#mult" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , "*"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Tau"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["annotation#comment" , ["/bootstrap#signature" , ["::" , ["builtin#mult" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#number"  ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#number"  ]    ] , ["." , ["::" , vars [2]  , ["/bootstrap#number"  ]    ] , ["[]"  ]    ]    ]    ]    ] , "Succeeds if C equals (numerically) AlphaPrime*BetaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "AlphaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "BetaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Gamma"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , [":-" , ["/Functional#eval" , ["/Functional#mult" , vars [0]  , vars [1]     ] , ["/bootstrap#number"  ] , vars [2]      ] , ["," , ["/Functional#eval" , vars [0]  , ["/bootstrap#number"  ] , vars [3]      ] , ["," , ["/Functional#eval" , vars [1]  , ["/bootstrap#number"  ] , vars [4]      ] , ["builtin#mult" , vars [3]  , vars [4]  , vars [2]      ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "Gamma"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "AlphaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "BetaPrime"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#div" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Tau"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#div" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["/bootstrap#vert" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["." , ["/bootstrap#pivot" , ["/bootstrap#box" , 1   ]   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Tau"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#alias" , ["::" , ["/Functional#div" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , "/"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Tau"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["annotation#comment" , ["/bootstrap#signature" , ["::" , ["builtin#div" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#number"  ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#number"  ]    ] , ["." , ["::" , vars [2]  , ["/bootstrap#number"  ]    ] , ["[]"  ]    ]    ]    ]    ] , "Succeeds if C equals (numerically) AlphaPrime/BetaPrime (real division)"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "AlphaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "BetaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Gamma"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , [":-" , ["/Functional#eval" , ["/Functional#div" , vars [0]  , vars [1]     ] , ["/bootstrap#number"  ] , vars [2]      ] , ["," , ["/Functional#eval" , vars [0]  , ["/bootstrap#number"  ] , vars [3]      ] , ["," , ["/Functional#eval" , vars [1]  , ["/bootstrap#number"  ] , vars [4]      ] , ["builtin#div" , vars [3]  , vars [4]  , vars [2]      ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "Gamma"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "AlphaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "BetaPrime"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#idiv" , vars [0]  , vars [1]     ] , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "Beta"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#idiv" , vars [0]  , vars [1]     ] , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ]   ] , ["." , ["/bootstrap#label" , "//"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "Beta"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#alias" , ["::" , ["/Functional#idiv" , vars [0]  , vars [1]     ] , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , "//"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "Beta"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["annotation#comment" , ["/bootstrap#signature" , ["::" , ["builtin#idiv" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#number"  ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#number"  ]    ] , ["." , ["::" , vars [2]  , ["/bootstrap#number"  ]    ] , ["[]"  ]    ]    ]    ]    ] , "Succeeds if C equals (numerically) AlphaPrime/BetaPrime (integer division)"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "AlphaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "BetaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Gamma"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , [":-" , ["/Functional#eval" , ["/Functional#idiv" , vars [0]  , vars [1]     ] , ["/bootstrap#number"  ] , vars [2]      ] , ["," , ["/Functional#eval" , vars [0]  , ["/bootstrap#number"  ] , vars [3]      ] , ["," , ["/Functional#eval" , vars [1]  , ["/bootstrap#number"  ] , vars [4]      ] , ["builtin#idiv" , vars [3]  , vars [4]  , vars [2]      ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "Gamma"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "AlphaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "BetaPrime"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#modulus" , vars [0]  , vars [1]     ] , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "Beta"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#modulus" , vars [0]  , vars [1]     ] , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ]   ] , ["." , ["/bootstrap#label" , "mod"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "Beta"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["annotation#comment" , ["/bootstrap#signature" , ["::" , ["builtin#modulus" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#number"  ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#number"  ]    ] , ["." , ["::" , vars [2]  , ["/bootstrap#number"  ]    ] , ["[]"  ]    ]    ]    ]    ] , "Succeeds if C equals (numerically) AlphaPrime mod BetaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "AlphaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "BetaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Gamma"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , [":-" , ["/Functional#eval" , ["/Functional#modulus" , vars [0]  , vars [1]     ] , ["/bootstrap#number"  ] , vars [2]      ] , ["," , ["/Functional#eval" , vars [0]  , ["/bootstrap#number"  ] , vars [3]      ] , ["," , ["/Functional#eval" , vars [1]  , ["/bootstrap#number"  ] , vars [4]      ] , ["builtin#modulus" , vars [3]  , vars [4]  , vars [2]      ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "Gamma"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "AlphaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "BetaPrime"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#plus" , ["/Functional#wrap" , 1   ] , ["/Functional#wrap" , 1   ]    ] , ["/bootstrap#number"  ] , 2     ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#div" , ["/Functional#wrap" , 5   ] , ["/Functional#wrap" , 2   ]    ] , ["/bootstrap#number"  ] , 2.5     ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#evalList" , vars [0]    ] , ["/Functional#expr" , ["/bootstrap#list" , vars [1]    ]   ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#list" , ["/Functional#expr" , vars [1]    ]   ]    ] , ["[]"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "ExprList"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "Tau"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , [":-" , ["/Functional#eval" , ["/Functional#evalList" , ["[]"  ]   ] , ["/bootstrap#list" , vars [0]    ] , ["[]"  ]     ] , ["builtin#true"  ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "Tau"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/eval.ced" , ["annotation#shrink" , [":-" , ["/Functional#eval" , ["/Functional#evalList" , ["." , vars [0]  , vars [1]     ]   ] , ["/bootstrap#list" , vars [2]    ] , ["." , vars [3]  , vars [4]     ]     ] , ["," , ["/Functional#eval" , vars [0]  , vars [2]  , vars [3]      ] , ["/Functional#eval" , ["/Functional#evalList" , vars [1]    ] , ["/bootstrap#list" , vars [2]    ] , vars [4]      ]    ]    ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "FirstExpr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "RestExpr"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "Tau"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "First"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "Rest"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/evaluator.ced" , ["/bootstrap#contextMenuEntry" , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ] , vars [2]  , vars [3]  , "Evaluate" , ["/bootstrap#where" , ["/bootstrap#doProc" , ["cpi#edit" , vars [3]  , ["::" , ["/Functional#wrap" , vars [4]    ] , ["/Functional#expr" , vars [1]    ]    ] , vars [2]      ]   ] , ["/Functional#eval" , vars [0]  , vars [1]  , vars [4]      ]    ]       ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "VNs"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "Path"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "Value"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (9  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/evaluator.ced" , ["/bootstrap#contextMenuEntry" , ["::" , ["/bootstrap#sandbox" , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ]   ] , ["/bootstrap#statement"  ]    ] , vars [2]  , vars [3]  , "Turn to unit test" , ["cpi#edit" , vars [3]  , ["::" , ["/bootstrap#unitTest" , ["/Functional#eval" , vars [0]  , vars [1]  , vars [4]      ]   ] , ["/bootstrap#statement"  ]    ] , vars [2]      ]       ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "VNs"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "Path"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/funtions.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#def" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#statement"  ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [2]  , ["/Functional#expr" , vars [1]    ]    ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Func"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Expr"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/funtions.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#def" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#statement"  ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/bootstrap#type"  ]    ]   ] , ["." , ["/bootstrap#label" , " "   ] , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ]   ] , ["[]"  ]    ]    ]    ]   ] , ["." , ["/bootstrap#symbol" , 8797   ] , ["." , ["/bootstrap#vis" , ["::" , vars [2]  , ["/Functional#expr" , vars [1]    ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Func"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Expr"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/funtions.ced" , ["~>" , ["/Functional#def" , vars [0]  , vars [1]  , vars [2]      ] , [":-" , ["/Functional#eval" , vars [0]  , vars [1]  , vars [3]      ] , ["/Functional#eval" , vars [2]  , vars [1]  , vars [3]      ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Func"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "V"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/funtions.ced" , ["/bootstrap#alias" , ["::" , ["/Functional#def" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#statement"  ]    ] , "=def"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Func"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Expr"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/funtions.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#f" , vars [0]    ] , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["[]"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "X"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/funtions.ced" , ["/Functional#def" , ["/Functional#f" , vars [0]    ] , ["/bootstrap#number"  ] , ["/Functional#div" , ["/Functional#plus" , vars [0]  , ["/Functional#wrap" , 2   ]    ] , ["/Functional#wrap" , 4   ]    ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "X"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/funtions.ced" , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#f" , ["/Functional#wrap" , 5   ]   ] , ["/bootstrap#number"  ] , 1.75     ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/funtions.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#parentheses" , vars [0]    ] , ["/Functional#expr" , vars [1]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ] , ["[]"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/funtions.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#parentheses" , vars [0]    ] , ["/Functional#expr" , vars [1]    ]    ] , ["/bootstrap#brackets" , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ]   ] , 40 , 41     ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/funtions.ced" , ["/bootstrap#alias" , ["::" , ["/Functional#parentheses" , vars [0]    ] , ["/Functional#expr" , vars [1]    ]    ] , "()"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/funtions.ced" , ["/Functional#def" , ["/Functional#parentheses" , vars [0]    ] , vars [1]  , vars [0]      ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/lambda.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#func" , vars [0]  , vars [1]     ] , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#type"  ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T2"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/lambda.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#func" , vars [0]  , vars [1]     ] , ["/bootstrap#type"  ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/bootstrap#type"  ]    ]   ] , ["." , ["/bootstrap#symbol" , 8594   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/bootstrap#type"  ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T2"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/lambda.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#lambda" , vars [0]  , vars [1]     ] , ["/Functional#func" , vars [2]  , vars [3]     ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , vars [3]    ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T2"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/lambda.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#lambda" , vars [0]  , vars [1]     ] , ["/Functional#func" , vars [2]  , vars [3]     ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#symbol" , 955   ] , ["." , ["/bootstrap#background" , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["cpi#rgb" , 255 , 255 , 255     ]    ] , ["." , ["/bootstrap#label" , "."   ] , ["." , ["/bootstrap#background" , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , vars [3]    ]    ]   ] , ["cpi#rgb" , 255 , 255 , 255     ]    ] , ["[]"  ]    ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T2"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/lambda.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#apply" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#expr" , vars [3]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , ["/Functional#func" , vars [1]  , vars [3]     ]   ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [2]  , ["/Functional#expr" , vars [1]    ]    ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Lambda"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T2"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/lambda.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#apply" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#expr" , vars [3]    ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#label" , "["   ] , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , ["/Functional#func" , vars [1]  , vars [3]     ]   ]    ]   ] , ["." , ["/bootstrap#label" , "]"   ] , ["." , ["/bootstrap#halfSize" , ["/bootstrap#vis" , ["::" , vars [1]  , ["/bootstrap#type"  ]    ]   ]   ] , ["." , ["/bootstrap#label" , "("   ] , ["." , ["/bootstrap#vis" , ["::" , vars [2]  , ["/Functional#expr" , vars [1]    ]    ]   ] , ["." , ["/bootstrap#label" , ")"   ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Lambda"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T2"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (14  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/lambda.ced" , [":-" , ["/Functional#eval" , ["/Functional#apply" , vars [0]  , vars [1]  , vars [2]      ] , vars [3]  , vars [4]      ] , ["," , ["builtin#copyTerm" , ["::" , vars [0]  , ["/Functional#expr" , ["/Functional#func" , vars [1]  , vars [3]     ]   ]    ] , ["::" , vars [5]  , ["/Functional#expr" , ["/Functional#func" , vars [1]  , vars [3]     ]   ]    ]    ] , ["," , ["/Functional#eval" , vars [5]  , ["/Functional#func" , vars [1]  , vars [3]     ] , ["/Functional#lambda" , vars [2]  , vars [6]     ]     ] , ["/Functional#eval" , vars [6]  , vars [3]  , vars [4]      ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [7]     ] , "LambdaExpr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [8]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [9]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [10]     ] , "T2"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [11]     ] , "V"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [12]     ] , "LambdaExprPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [6]  , vars [13]     ] , "Expr"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/lambda.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#g" , vars [0]    ] , ["/Functional#expr" , ["/Functional#func" , ["/bootstrap#number"  ] , ["/bootstrap#number"  ]    ]   ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["[]"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "X"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/lambda.ced" , ["/Functional#def" , ["/Functional#g" , vars [0]    ] , ["/Functional#func" , ["/bootstrap#number"  ] , ["/bootstrap#number"  ]    ] , ["/Functional#wrap" , ["/Functional#lambda" , vars [1]  , ["/Functional#plus" , vars [0]  , vars [1]     ]    ]   ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "Y"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/lambda.ced" , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#apply" , ["/Functional#g" , ["/Functional#wrap" , 3   ]   ] , ["/bootstrap#number"  ] , ["/Functional#wrap" , 2   ]     ] , ["/bootstrap#number"  ] , 5     ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/lambda.ced" , ["/Functional#def" , ["/Functional#plus" , vars [0]  , vars [1]     ] , ["/Functional#func" , vars [2]  , vars [3]     ] , ["/Functional#wrap" , ["/Functional#lambda" , vars [4]  , ["/Functional#plus" , ["/Functional#apply" , vars [0]  , vars [2]  , vars [4]      ] , ["/Functional#apply" , vars [1]  , vars [2]  , vars [4]      ]    ]    ]   ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "T2"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "X"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/lambda.ced" , ["/Functional#def" , ["/Functional#minus" , vars [0]  , vars [1]     ] , ["/Functional#func" , vars [2]  , vars [3]     ] , ["/Functional#wrap" , ["/Functional#lambda" , vars [4]  , ["/Functional#minus" , ["/Functional#apply" , vars [0]  , vars [2]  , vars [4]      ] , ["/Functional#apply" , vars [1]  , vars [2]  , vars [4]      ]    ]    ]   ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "T2"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "X"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/lambda.ced" , ["/Functional#def" , ["/Functional#mult" , vars [0]  , vars [1]     ] , ["/Functional#func" , vars [2]  , vars [3]     ] , ["/Functional#wrap" , ["/Functional#lambda" , vars [4]  , ["/Functional#mult" , ["/Functional#apply" , vars [0]  , vars [2]  , vars [4]      ] , ["/Functional#apply" , vars [1]  , vars [2]  , vars [4]      ]    ]    ]   ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "T2"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "X"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/lambda.ced" , ["/Functional#def" , ["/Functional#div" , vars [0]  , vars [1]     ] , ["/Functional#func" , vars [2]  , vars [3]     ] , ["/Functional#wrap" , ["/Functional#lambda" , vars [4]  , ["/Functional#div" , ["/Functional#apply" , vars [0]  , vars [2]  , vars [4]      ] , ["/Functional#apply" , vars [1]  , vars [2]  , vars [4]      ]    ]    ]   ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "T2"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "X"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/lambda.ced" , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#apply" , ["/Functional#plus" , ["/Functional#g" , ["/Functional#wrap" , 3   ]   ] , ["/Functional#g" , ["/Functional#wrap" , 2   ]   ]    ] , ["/bootstrap#number"  ] , ["/Functional#wrap" , 2   ]     ] , ["/bootstrap#number"  ] , 9     ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/list.ced" , ["/Functional#def" , ["/Functional#plus" , vars [0]  , vars [1]     ] , ["/bootstrap#list" , vars [2]    ] , ["/Functional#switch" , vars [0]  , ["/bootstrap#list" , vars [2]    ] , ["/Functional#case" , ["." , vars [3]  , vars [4]     ] , ["/Functional#wrap" , ["." , vars [3]  , ["/Functional#unwrap" , ["/Functional#plus" , ["/Functional#wrap" , vars [4]    ] , vars [1]     ]   ]    ]   ] , ["/Functional#otherwise" , vars [1]    ]     ]     ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "F"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "R"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/list.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#map" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#expr" , ["/bootstrap#list" , vars [3]    ]   ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#list" , vars [2]    ]   ]    ] , ["." , ["::" , vars [1]  , ["/Functional#func" , vars [2]  , vars [3]     ]    ] , ["." , ["::" , vars [2]  , ["/bootstrap#type"  ]    ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "List"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Lambda"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T2"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (12  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/list.ced" , ["/bootstrap#disabled" , ["/Functional#def" , ["/Functional#map" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#list" , vars [3]    ] , ["/Functional#if" , ["/Functional#eval" , vars [0]  , ["/bootstrap#list" , vars [2]    ] , ["." , vars [4]  , vars [5]     ]     ] , ["/Functional#wrap" , ["." , ["/Functional#unwrap" , ["/Functional#apply" , ["/Functional#wrap" , vars [1]    ] , vars [2]  , ["/Functional#wrap" , vars [4]    ]     ]   ] , ["/Functional#unwrap" , ["/Functional#map" , ["/Functional#wrap" , vars [5]    ] , vars [1]  , vars [2]      ]   ]    ]   ] , ["/Functional#wrap" , ["[]"  ]   ]     ]     ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [6]     ] , "List"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [7]     ] , "Lambda"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [8]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [9]     ] , "T2"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [10]     ] , "L1"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [11]     ] , "LPrime"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (16  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/list.ced" , ["/Functional#def" , ["/Functional#map" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#list" , vars [3]    ] , ["/Functional#switch" , vars [0]  , ["/bootstrap#list" , vars [2]    ] , ["/Functional#case" , ["." , vars [4]  , vars [5]     ] , ["/Functional#where" , ["/Functional#const" , ["." , vars [6]  , vars [7]     ]   ] , ["," , ["/Functional#eval" , ["/Functional#map" , ["/Functional#const" , vars [5]    ] , vars [1]  , vars [2]      ] , ["/bootstrap#list" , vars [3]    ] , vars [7]      ] , ["," , ["/Functional#eval" , ["/Functional#apply" , ["/Functional#const" , vars [1]    ] , vars [2]  , ["/Functional#const" , vars [4]    ]     ] , vars [3]  , vars [6]      ] , ["builtin#true"  ]    ]    ]    ] , ["/Functional#case" , ["[]"  ] , ["/Functional#wrap" , ["[]"  ]   ] , ["/Functional#otherwise" , ["/Functional#failedToCompute" , vars [0]    ]   ]     ]     ]     ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [8]     ] , "List"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [9]     ] , "Lambda"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [10]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [11]     ] , "T2"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [12]     ] , "L1"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [13]     ] , "LPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [6]  , vars [14]     ] , "M1"    ] , ["." , ["builtin#varName" , ["::" , vars [7]  , vars [15]     ] , "MPrime"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/list.ced" , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#map" , ["/Functional#wrap" , ["." , 1 , ["." , 2 , ["." , 3 , ["[]"  ]    ]    ]    ]   ] , ["/Functional#lambda" , vars [0]  , ["/Functional#applyBinOp" , vars [0]  , ["/Functional#numPlus"  ] , vars [0]      ]    ] , ["/bootstrap#number"  ]     ] , ["/bootstrap#list" , ["/bootstrap#number"  ]   ] , ["." , 2 , ["." , 4 , ["." , 6 , ["[]"  ]    ]    ]    ]     ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "X"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/list.ced" , ["/bootstrap#sandbox" , ["::" , ["/Functional#map" , ["/Functional#wrap" , ["." , 1 , ["." , 2 , ["." , 3 , ["[]"  ]    ]    ]    ]   ] , ["/Functional#lambda" , vars [0]  , ["/Functional#applyBinOp" , vars [0]  , ["/Functional#numPlus"  ] , vars [0]      ]    ] , ["/bootstrap#number"  ]     ] , ["/Functional#expr" , ["/bootstrap#list" , ["/bootstrap#number"  ]   ]   ]    ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "X"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/pair.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#pairType" , vars [0]  , vars [1]     ] , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#type"  ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "TA"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "TB"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/pair.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#pairType" , vars [0]  , vars [1]     ] , ["/bootstrap#type"  ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/bootstrap#type"  ]    ]   ] , ["." , ["/bootstrap#symbol" , 10799   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/bootstrap#type"  ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "TA"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "TB"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/pair.ced" , ["/bootstrap#alias" , ["::" , ["/Functional#pairType" , vars [0]  , vars [1]     ] , ["/bootstrap#type"  ]    ] , "*"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "TA"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "TB"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/pair.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#pair" , vars [0]  , vars [1]     ] , ["/Functional#pairType" , vars [2]  , vars [3]     ]    ] , ["." , ["::" , vars [0]  , vars [2]     ] , ["." , ["::" , vars [1]  , vars [3]     ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "TA"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "TB"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/pair.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#pair" , vars [0]  , vars [1]     ] , ["/Functional#pairType" , vars [2]  , vars [3]     ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , vars [2]     ]   ] , ["." , ["/bootstrap#label" , ","   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , vars [3]     ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "TA"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "TB"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/plus.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#plus" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Tau"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/plus.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#plus" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["." , ["/bootstrap#label" , "+"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Tau"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/plus.ced" , ["/bootstrap#alias" , ["::" , ["/Functional#plus" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , "+"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Tau"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/plus.ced" , ["annotation#comment" , ["/bootstrap#signature" , ["::" , ["builtin#plus" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#number"  ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#number"  ]    ] , ["." , ["::" , vars [2]  , ["/bootstrap#number"  ]    ] , ["[]"  ]    ]    ]    ]    ] , "Succeeds if C equals (numerically) AlphaPrime+BetaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "AlphaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "BetaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "C"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/plus.ced" , [":-" , ["/Functional#eval" , ["/Functional#plus" , vars [0]  , vars [1]     ] , ["/bootstrap#number"  ] , vars [2]      ] , ["," , ["/Functional#eval" , vars [0]  , ["/bootstrap#number"  ] , vars [3]      ] , ["," , ["/Functional#eval" , vars [1]  , ["/bootstrap#number"  ] , vars [4]      ] , ["builtin#plus" , vars [3]  , vars [4]  , vars [2]      ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "Alpha"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "Beta"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "Gamma"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "AlphaPrime"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "BetaPrime"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#seq" , vars [0]    ] , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#type"  ]    ] , ["[]"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "T"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#seq" , vars [0]  , vars [1]     ] , ["/Functional#seq" , vars [2]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , ["/Functional#seq" , vars [2]    ]   ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "First"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Next"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#first" , vars [0]    ] , ["/Functional#expr" , vars [1]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , ["/Functional#seq" , vars [1]    ]   ]    ] , ["[]"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "SeqExpr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , [":-" , ["/Functional#eval" , ["/Functional#first" , vars [0]    ] , vars [1]  , vars [2]      ] , ["," , ["/Functional#eval" , vars [0]  , ["/Functional#seq" , vars [1]    ] , ["/Functional#seq" , vars [3]  , vars [4]     ]     ] , ["/Functional#eval" , vars [3]  , vars [1]  , vars [2]      ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "SeqExpr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "V"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "First"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "Next"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#next" , vars [0]    ] , ["/Functional#expr" , ["/Functional#seq" , vars [1]    ]   ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , ["/Functional#seq" , vars [1]    ]   ]    ] , ["[]"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "SeqExpr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , [":-" , ["/Functional#eval" , ["/Functional#next" , vars [0]    ] , ["/Functional#seq" , vars [1]    ] , vars [2]      ] , ["," , ["/Functional#eval" , vars [0]  , ["/Functional#seq" , vars [1]    ] , ["/Functional#seq" , vars [3]  , vars [4]     ]     ] , ["/Functional#eval" , vars [4]  , ["/Functional#seq" , vars [1]    ] , vars [2]      ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "SeqExpr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "V"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "First"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "Next"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#element" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , ["/Functional#seq" , vars [2]    ]   ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Seq"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Index"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#element" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , ["/Functional#seq" , vars [2]    ]   ]    ]   ] , ["." , ["/bootstrap#label" , "["   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ]   ] , ["." , ["/bootstrap#label" , "]"   ] , ["[]"  ]    ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Seq"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Index"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/Functional#def" , ["/Functional#element" , vars [0]  , vars [1]     ] , vars [2]  , ["/Functional#if" , ["/Functional#gt" , vars [1]  , ["/Functional#wrap" , 0   ] , ["/bootstrap#number"  ]     ] , ["/Functional#element" , ["/Functional#next" , vars [0]    ] , ["/Functional#minus" , vars [1]  , ["/Functional#wrap" , 1   ]    ]    ] , ["/Functional#first" , vars [0]    ]     ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Seq"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Index"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/bootstrap#defAtom" , ["::" , ["/Functional#fib"  ] , ["/Functional#expr" , ["/Functional#seq" , ["/bootstrap#number"  ]   ]   ]    ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/Functional#def" , ["/Functional#fib"  ] , ["/Functional#seq" , ["/bootstrap#number"  ]   ] , ["/Functional#fib" , ["/Functional#const" , 1   ] , ["/Functional#const" , 1   ]    ]     ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#fib" , vars [0]  , vars [1]     ] , ["/Functional#expr" , ["/Functional#seq" , ["/bootstrap#number"  ]   ]   ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "Y"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/Functional#def" , ["/Functional#fib" , vars [0]  , vars [1]     ] , ["/Functional#seq" , ["/bootstrap#number"  ]   ] , ["/Functional#const" , ["/Functional#seq" , vars [0]  , ["/Functional#fib" , vars [1]  , ["/Functional#plus" , vars [0]  , vars [1]     ]    ]    ]   ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "Y"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#element" , ["/Functional#fib"  ] , ["/Functional#wrap" , 5   ]    ] , ["/bootstrap#number"  ] , 8     ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/Functional#def" , ["/Functional#plus" , vars [0]  , vars [1]     ] , ["/Functional#seq" , vars [2]    ] , ["/Functional#wrap" , ["/Functional#seq" , ["/Functional#plus" , ["/Functional#first" , vars [0]    ] , ["/Functional#first" , vars [1]    ]    ] , ["/Functional#plus" , ["/Functional#next" , vars [0]    ] , ["/Functional#next" , vars [1]    ]    ]    ]   ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/Functional#def" , ["/Functional#minus" , vars [0]  , vars [1]     ] , ["/Functional#seq" , vars [2]    ] , ["/Functional#wrap" , ["/Functional#seq" , ["/Functional#minus" , ["/Functional#first" , vars [0]    ] , ["/Functional#first" , vars [1]    ]    ] , ["/Functional#minus" , ["/Functional#next" , vars [0]    ] , ["/Functional#next" , vars [1]    ]    ]    ]   ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/Functional#def" , ["/Functional#mult" , vars [0]  , vars [1]     ] , ["/Functional#seq" , vars [2]    ] , ["/Functional#wrap" , ["/Functional#seq" , ["/Functional#mult" , ["/Functional#first" , vars [0]    ] , ["/Functional#first" , vars [1]    ]    ] , ["/Functional#mult" , ["/Functional#next" , vars [0]    ] , ["/Functional#next" , vars [1]    ]    ]    ]   ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/Functional#def" , ["/Functional#div" , vars [0]  , vars [1]     ] , ["/Functional#seq" , vars [2]    ] , ["/Functional#wrap" , ["/Functional#seq" , ["/Functional#div" , ["/Functional#first" , vars [0]    ] , ["/Functional#first" , vars [1]    ]    ] , ["/Functional#div" , ["/Functional#next" , vars [0]    ] , ["/Functional#next" , vars [1]    ]    ]    ]   ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "T"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#element" , ["/Functional#plus" , ["/Functional#fib"  ] , ["/Functional#fib"  ]    ] , ["/Functional#wrap" , 6   ]    ] , ["/bootstrap#number"  ] , 26     ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#constSeq" , vars [0]    ] , ["/Functional#expr" , ["/Functional#seq" , vars [1]    ]   ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ] , ["[]"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "C"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#constSeq" , vars [0]    ] , ["/Functional#expr" , ["/Functional#seq" , vars [1]    ]   ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#halfSize" , ["/bootstrap#label" , "seq"   ]   ] , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ]   ] , ["[]"  ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "C"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/Functional#def" , ["/Functional#constSeq" , vars [0]    ] , ["/Functional#seq" , vars [1]    ] , ["/Functional#wrap" , ["/Functional#seq" , vars [0]  , ["/Functional#constSeq" , vars [0]    ]    ]   ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "C"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sequence.ced" , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#element" , ["/Functional#plus" , ["/Functional#fib"  ] , ["/Functional#constSeq" , ["/Functional#wrap" , 3   ]   ]    ] , ["/Functional#wrap" , 6   ]    ] , ["/bootstrap#number"  ] , 16     ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (12  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/snippets.ced" , ["/Test#statements" , ["." , ["/bootstrap#signature" , ["::" , ["/Functional#plus" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["/bootstrap#projection" , ["::" , ["/Functional#plus" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["." , ["/bootstrap#label" , "+"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["/bootstrap#alias" , ["::" , ["/Functional#plus" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , "+"    ] , ["." , [":-" , ["/Functional#eval" , ["/Functional#plus" , vars [0]  , vars [1]     ] , ["/bootstrap#number"  ] , vars [3]      ] , ["," , ["/Functional#eval" , vars [0]  , ["/bootstrap#number"  ] , vars [4]      ] , ["," , ["/Functional#eval" , vars [1]  , ["/bootstrap#number"  ] , vars [5]      ] , ["builtin#plus" , vars [4]  , vars [5]  , vars [3]      ]    ]    ]    ] , ["." , ["/bootstrap#signature" , ["::" , ["/Functional#div" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["/bootstrap#projection" , ["::" , ["/Functional#div" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["/bootstrap#vert" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["." , ["/bootstrap#box" , 1   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["/bootstrap#alias" , ["::" , ["/Functional#div" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , "/"    ] , ["." , [":-" , ["/Functional#eval" , ["/Functional#div" , vars [0]  , vars [1]     ] , ["/bootstrap#number"  ] , vars [3]      ] , ["," , ["/Functional#eval" , vars [0]  , ["/bootstrap#number"  ] , vars [4]      ] , ["," , ["/Functional#eval" , vars [1]  , ["/bootstrap#number"  ] , vars [5]      ] , ["builtin#div" , vars [4]  , vars [5]  , vars [3]      ]    ]    ]    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]    ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [6]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [7]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [8]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [9]     ] , "C"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [10]     ] , "AV"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [11]     ] , "BV"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/snippets.ced" , ["/Test#statements" , ["." , ["/bootstrap#signature" , ["::" , ["/Functional#expr" , vars [0]    ] , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#type"  ]    ] , ["[]"  ]    ]    ] , ["." , ["/bootstrap#signature" , ["::" , ["/Functional#eval" , vars [1]  , vars [0]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , vars [0]    ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [2]  , vars [0]     ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["/bootstrap#projection" , ["::" , ["/Functional#eval" , vars [1]  , vars [0]  , vars [2]      ] , ["/bootstrap#pred"  ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [2]  , vars [0]     ]   ] , ["." , ["/bootstrap#halfSize" , ["/bootstrap#vis" , ["::" , vars [0]  , ["/bootstrap#type"  ]    ]   ]   ] , ["." , ["/bootstrap#symbol" , 8656   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , vars [0]    ]    ]   ] , ["[]"  ]    ]    ]    ]    ]   ]    ] , ["." , ["/bootstrap#defines" , [":-" , ["/Functional#eval" , vars [1]  , vars [0]  , vars [3]      ] , vars [4]     ] , ["::" , vars [1]  , ["/Functional#expr" , vars [0]    ]    ] , ["/bootstrap#semanticDefinition"  ]     ] , ["[]"  ]    ]    ]    ]    ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "Value"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (18  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/snippets.ced" , ["/Test#statements" , ["." , ["/bootstrap#signature" , ["::" , ["/Functional#if" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#expr" , vars [3]    ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , vars [3]    ]    ] , ["." , ["::" , vars [2]  , ["/Functional#expr" , vars [3]    ]    ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["/bootstrap#projection" , ["::" , ["/Functional#if" , vars [0]  , vars [1]  , vars [2]      ] , ["/Functional#expr" , vars [3]    ]    ] , ["/bootstrap#vert" , ["." , ["/bootstrap#horiz" , ["." , ["/bootstrap#label" , "if"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/bootstrap#pred"  ]    ]   ] , ["." , ["/bootstrap#label" , ":"   ] , ["[]"  ]    ]    ]    ]   ] , ["." , ["/bootstrap#horiz" , ["." , ["/bootstrap#label" , "    "   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , vars [3]    ]    ]   ] , ["[]"  ]    ]    ]   ] , ["." , ["/bootstrap#horiz" , ["." , ["/bootstrap#label" , "else:"   ] , ["[]"  ]    ]   ] , ["." , ["/bootstrap#horiz" , ["." , ["/bootstrap#label" , "    "   ] , ["." , ["/bootstrap#vis" , ["::" , vars [2]  , ["/Functional#expr" , vars [3]    ]    ]   ] , ["[]"  ]    ]    ]   ] , ["[]"  ]    ]    ]    ]    ]   ]    ] , ["." , [":-" , ["/Functional#eval" , ["/Functional#if" , vars [0]  , vars [1]  , vars [2]      ] , vars [3]  , vars [4]      ] , ["builtin#if" , vars [0]  , ["/Functional#eval" , vars [1]  , vars [3]  , vars [4]      ] , ["/Functional#eval" , vars [2]  , vars [3]  , vars [4]      ]     ]    ] , ["." , ["/bootstrap#signature" , ["::" , ["/Functional#eq" , vars [5]  , vars [6]  , vars [3]      ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [5]  , ["/Functional#expr" , vars [3]    ]    ] , ["." , ["::" , vars [6]  , ["/Functional#expr" , vars [3]    ]    ] , ["." , ["::" , vars [3]  , ["/bootstrap#type"  ]    ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["/bootstrap#projection" , ["::" , ["/Functional#eq" , vars [5]  , vars [6]  , vars [3]      ] , ["/bootstrap#pred"  ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [5]  , ["/Functional#expr" , vars [3]    ]    ]   ] , ["." , ["/bootstrap#label" , "="   ] , ["." , ["/bootstrap#halfSize" , ["/bootstrap#vis" , ["::" , vars [3]  , ["/bootstrap#type"  ]    ]   ]   ] , ["." , ["/bootstrap#vis" , ["::" , vars [6]  , ["/Functional#expr" , vars [3]    ]    ]   ] , ["[]"  ]    ]    ]    ]    ]   ]    ] , ["." , [":-" , ["/Functional#eq" , vars [5]  , vars [6]  , vars [3]      ] , ["," , ["/Functional#eval" , vars [5]  , vars [3]  , vars [7]      ] , ["," , ["/Functional#eval" , vars [6]  , vars [3]  , vars [8]      ] , ["builtin#equals" , ["::" , vars [7]  , vars [3]     ] , ["::" , vars [8]  , vars [3]     ]    ]    ]    ]    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [9]     ] , "Cond"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [10]     ] , "Then"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [11]     ] , "Else"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [12]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [13]     ] , "V"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [14]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [6]  , vars [15]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [7]  , vars [16]     ] , "AV"    ] , ["." , ["builtin#varName" , ["::" , vars [8]  , vars [17]     ] , "BV"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/snippets.ced" , ["/Test#statements" , ["." , ["/bootstrap#signature" , ["::" , ["/Functional#def" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#statement"  ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#type"  ]    ] , ["." , ["::" , vars [2]  , ["/Functional#expr" , vars [1]    ]    ] , ["[]"  ]    ]    ]    ]    ] , ["." , ["/bootstrap#projection" , ["::" , ["/Functional#def" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#statement"  ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/bootstrap#type"  ]    ]   ] , ["." , ["/bootstrap#label" , " "   ] , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ]   ] , ["." , ["/bootstrap#symbol" , 8797   ] , ["." , ["/bootstrap#vis" , ["::" , vars [2]  , ["/Functional#expr" , vars [1]    ]    ]   ] , ["[]"  ]    ]    ]    ]    ]    ]   ]    ] , ["." , ["~>" , ["/Functional#def" , vars [0]  , vars [1]  , vars [2]      ] , [":-" , ["/Functional#eval" , vars [0]  , vars [1]  , vars [3]      ] , ["/Functional#eval" , vars [2]  , vars [1]  , vars [3]      ]    ]    ] , ["." , ["/bootstrap#alias" , ["::" , ["/Functional#def" , vars [0]  , vars [1]  , vars [2]      ] , ["/bootstrap#statement"  ]    ] , "=def"    ] , ["." , ["/Functional#def" , ["/Functional#f" , vars [4]    ] , ["/bootstrap#number"  ] , ["/Functional#div" , ["/Functional#plus" , vars [4]  , ["/Functional#wrap" , 2   ]    ] , ["/Functional#wrap" , 4   ]    ]     ] , ["." , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#f" , ["/Functional#wrap" , 5   ]   ] , ["/bootstrap#number"  ] , 1.75     ]   ] , ["[]"  ]    ]    ]    ]    ]    ]    ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "Func"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "V"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "X"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/strings.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#num2str" , vars [0]    ] , ["/Functional#expr" , ["/bootstrap#string"  ]   ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["[]"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "Num"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/strings.ced" , [":-" , ["/Functional#eval" , ["/Functional#num2str" , vars [0]    ] , ["/bootstrap#string"  ] , vars [1]      ] , ["," , ["/Functional#eval" , vars [0]  , ["/bootstrap#number"  ] , vars [2]      ] , ["builtin#termToString" , ["::" , vars [2]  , ["/bootstrap#number"  ]    ] , ["[]"  ] , 1 , ["[]"  ] , vars [1]        ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "NumExpr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Str"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Num"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/strings.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#concat" , vars [0]  , vars [1]     ] , ["/Functional#expr" , ["/bootstrap#string"  ]   ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#string"  ]   ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , ["/bootstrap#string"  ]   ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "B"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/strings.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#concat" , vars [0]  , vars [1]     ] , ["/Functional#expr" , ["/bootstrap#string"  ]   ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#string"  ]   ]    ]   ] , ["." , ["/bootstrap#label" , "+"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , ["/bootstrap#string"  ]   ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "B"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/strings.ced" , ["/bootstrap#alias" , ["::" , ["/Functional#concat" , vars [0]  , vars [1]     ] , ["/Functional#expr" , ["/bootstrap#string"  ]   ]    ] , "+"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "B"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/strings.ced" , [":-" , ["/Functional#eval" , ["/Functional#concat" , vars [0]  , vars [1]     ] , ["/bootstrap#string"  ] , vars [2]      ] , ["," , ["/Functional#eval" , vars [0]  , ["/bootstrap#string"  ] , vars [3]      ] , ["," , ["/Functional#eval" , vars [1]  , ["/bootstrap#string"  ] , vars [4]      ] , ["builtin#strcat" , vars [3]  , vars [4]  , vars [2]      ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "Str"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "AV"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "BV"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/strings.ced" , ["/Functional#def" , ["/Functional#plus" , vars [0]  , vars [1]     ] , ["/bootstrap#string"  ] , ["/Functional#concat" , vars [0]  , vars [1]     ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "A"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "B"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/strings.ced" , ["/bootstrap#defAtom" , ["::" , ["/Functional#concat"  ] , ["/Functional#binOp" , ["/bootstrap#string"  ]   ]    ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/strings.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#concat"  ] , ["/Functional#binOp" , ["/bootstrap#string"  ]   ]    ] , ["/bootstrap#label" , "+"   ]    ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/strings.ced" , ["/Functional#def" , ["/Functional#applyBinOp" , vars [0]  , ["/Functional#concat"  ] , vars [1]      ] , ["/bootstrap#string"  ] , ["/Functional#concat" , vars [0]  , vars [1]     ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "S1"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "S2"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sum.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#sum" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#pred"  ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Goal"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Type"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sum.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#sum" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["/bootstrap#vert" , ["." , ["/bootstrap#pivot" , ["/bootstrap#brackets" , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ]   ] , 8721 , 0     ]   ] , ["." , ["/bootstrap#halfSize" , ["/bootstrap#vis" , ["::" , vars [1]  , ["/bootstrap#pred"  ]    ]   ]   ] , ["[]"  ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Goal"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Type"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (12  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sum.ced" , ["annotation#shrink" , [":-" , ["/Functional#eval" , ["/Functional#sum" , vars [0]  , vars [1]     ] , vars [2]  , vars [3]      ] , ["," , ["builtin#findall" , vars [4]  , vars [2]  , ["," , vars [1]  , ["/Functional#eval" , vars [0]  , vars [2]  , vars [4]      ]    ] , vars [5]       ] , ["/Functional#eval" , ["/Functional#sumList" , vars [5]    ] , vars [2]  , vars [3]      ]    ]    ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [6]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [7]     ] , "Goal"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [8]     ] , "Type"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [9]     ] , "Sum"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [10]     ] , "Value"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [11]     ] , "List"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sum.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#sumList" , vars [0]    ] , ["/Functional#expr" , vars [1]    ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#list" , vars [1]    ]    ] , ["[]"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "List"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "Type"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sum.ced" , ["/Functional#def" , ["/Functional#sumList" , ["[]"  ]   ] , vars [0]  , ["/Functional#zero"  ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "Type"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sum.ced" , ["/Functional#def" , ["/Functional#sumList" , ["." , vars [0]  , vars [1]     ]   ] , vars [2]  , ["/Functional#plus" , ["/Functional#wrap" , vars [0]    ] , ["/Functional#sumList" , vars [1]    ]    ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "First"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Rest"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Type"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sum.ced" , ["/bootstrap#defAtom" , ["::" , ["/Functional#zero"  ] , ["/Functional#expr" , vars [0]    ]    ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "Type"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sum.ced" , ["/Functional#def" , ["/Functional#zero"  ] , ["/bootstrap#number"  ] , ["/Functional#wrap" , 0   ]     ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/sum.ced" , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#sum" , ["/Functional#parentheses" , ["/Functional#plus" , ["/Functional#div" , ["/Functional#mult" , ["/Functional#wrap" , vars [0]    ] , ["/Functional#wrap" , vars [0]    ]    ] , ["/Functional#wrap" , 2   ]    ] , ["/Functional#wrap" , vars [0]    ]    ]   ] , ["/bootstrap#member" , vars [0]  , ["/bootstrap#listSet" , ["." , 1 , ["." , 2 , ["." , 3 , ["." , 4 , ["[]"  ]    ]    ]    ]    ]   ] , ["/bootstrap#number"  ]     ]    ] , ["/bootstrap#number"  ] , 25     ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "X"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/where.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#where" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#pred"  ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Goal"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Type"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/where.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#where" , vars [0]  , vars [1]     ] , ["/Functional#expr" , vars [2]    ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [2]    ]    ]   ] , ["." , ["/bootstrap#label" , "where"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/bootstrap#pred"  ]    ]   ] , ["[]"  ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "Goal"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "Type"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/where.ced" , [":-" , ["/Functional#eval" , ["/Functional#where" , vars [0]  , vars [1]     ] , vars [2]  , vars [3]      ] , ["," , vars [1]  , ["/Functional#eval" , vars [0]  , vars [2]  , vars [3]      ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "Goal"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "Type"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "Val"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#wrap" , vars [0]    ] , ["/Functional#expr" , vars [1]    ]    ] , ["." , ["::" , vars [0]  , vars [1]     ] , ["[]"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Term"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#wrap" , vars [0]    ] , ["/Functional#expr" , vars [1]    ]    ] , ["/bootstrap#raised" , ["/bootstrap#lineBorder" , ["/bootstrap#background" , ["/bootstrap#vis" , ["::" , vars [0]  , vars [1]     ]   ] , ["cpi#rgb" , 192 , 192 , 255     ]    ] , 2 , ["cpi#rgb" , 192 , 192 , 255     ]     ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Term"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (14  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , [":-" , ["/Functional#eval" , ["/Functional#wrap" , vars [0]    ] , vars [1]  , vars [2]      ] , ["builtin#if" , ["builtin#compound" , ["::" , vars [0]  , vars [1]     ]   ] , ["builtin#if" , ["=" , ["::" , vars [0]  , vars [1]     ] , ["::" , ["/Functional#unwrap" , vars [3]    ] , vars [1]     ]    ] , ["/Functional#eval" , vars [3]  , vars [1]  , vars [2]      ] , ["," , ["/bootstrap#safeParseTerm" , ["::" , vars [0]  , vars [1]     ] , vars [4]  , vars [5]      ] , ["," , ["/Functional#evalArgs" , vars [5]  , vars [6]     ] , ["builtin#parseTerm" , ["::" , vars [2]  , vars [1]     ] , vars [4]  , vars [6]      ]    ]    ]     ] , ["=" , ["::" , vars [2]  , vars [1]     ] , ["::" , vars [0]  , vars [1]     ]    ]     ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [7]     ] , "Term"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [8]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [9]     ] , "V"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [10]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [11]     ] , "Name"    ] , ["." , ["builtin#varName" , ["::" , vars [5]  , vars [12]     ] , "Args"    ] , ["." , ["builtin#varName" , ["::" , vars [6]  , vars [13]     ] , "EArgs"    ] , ["[]"  ]    ]    ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , ["/bootstrap#sandbox" , ["::" , ["/bootstrap#listSet" , ["." , [":-" , ["/bootstrap#checkSignature" , ["::" , ["/Functional#unwrap" , vars [0]    ] , vars [1]     ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ] , ["[]"  ]    ]    ] , ["builtin#true"  ]    ] , ["[]"  ]    ]   ] , ["/bootstrap#set" , ["/bootstrap#statement"  ]   ]    ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , [":-" , ["/Functional#evalArgs" , ["[]"  ] , ["[]"  ]    ] , ["builtin#true"  ]    ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#evalArgs" , vars [0]  , vars [1]     ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#list" , ["/bootstrap#typedTerm"  ]   ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#list" , ["/bootstrap#typedTerm"  ]   ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Args"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "ArgsV"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , [":-" , ["/bootstrap#checkSignature" , ["::" , ["/Functional#unwrap" , vars [0]    ] , vars [1]     ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ] , ["[]"  ]    ]    ] , ["builtin#true"  ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#unwrap" , vars [0]    ] , vars [1]     ] , ["/bootstrap#lineBorder" , ["/bootstrap#lowered" , ["/bootstrap#background" , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , vars [1]    ]    ]   ] , ["cpi#rgb" , 255 , 255 , 255     ]    ]   ] , 2 , ["cpi#rgb" , 192 , 192 , 255     ]     ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Expr"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , ["annotation#comment" , ["/bootstrap#signature" , ["::" , ["builtin#compound" , vars [0]    ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#typedTerm"  ]    ] , ["[]"  ]    ]    ] , "Is TTerm a compound typed-term?"    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "TTerm"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (10  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , [":-" , ["/Functional#evalArgs" , ["." , ["::" , vars [0]  , vars [1]     ] , vars [2]     ] , ["." , ["::" , vars [3]  , vars [1]     ] , vars [4]     ]    ] , ["," , ["/Functional#eval" , ["/Functional#wrap" , vars [0]    ] , vars [1]  , vars [3]      ] , ["/Functional#evalArgs" , vars [2]  , vars [4]     ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [5]     ] , "First"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [6]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [7]     ] , "Rest"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [8]     ] , "FirstV"    ] , ["." , ["builtin#varName" , ["::" , vars [4]  , vars [9]     ] , "RestV"    ] , ["[]"  ]    ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , ["/bootstrap#disabled" , ["/bootstrap#adapter" , ["::" , vars [0]  , vars [1]     ] , ["::" , ["/Functional#wrap" , vars [0]    ] , ["/Functional#expr" , vars [1]    ]    ]    ]   ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Term"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#range" , vars [0]  , vars [1]     ] , ["/Functional#expr" , ["/bootstrap#list" , ["/bootstrap#number"  ]   ]   ]    ] , ["." , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["." , ["::" , vars [1]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "E"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , ["/bootstrap#projection" , ["::" , ["/Functional#range" , vars [0]  , vars [1]     ] , ["/Functional#expr" , ["/bootstrap#list" , ["/bootstrap#number"  ]   ]   ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#brackets" , ["/bootstrap#horiz" , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ]   ] , ["." , ["/bootstrap#label" , ","   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/Functional#expr" , ["/bootstrap#number"  ]   ]    ]   ] , ["[]"  ]    ]    ]    ]   ] , 91 , 41     ] , ["[]"  ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "E"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , ["/Functional#def" , ["/Functional#range" , vars [0]  , vars [1]     ] , ["/bootstrap#list" , ["/bootstrap#number"  ]   ] , ["/Functional#if" , ["/Functional#gt" , vars [1]  , vars [0]  , ["/bootstrap#number"  ]     ] , ["/Functional#wrap" , ["." , ["/Functional#unwrap" , vars [0]    ] , ["/Functional#unwrap" , ["/Functional#range" , ["/Functional#plus" , vars [0]  , ["/Functional#wrap" , 1   ]    ] , vars [1]     ]   ]    ]   ] , ["/Functional#wrap" , ["[]"  ]   ]     ]     ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "B"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "E"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (0  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , ["/bootstrap#unitTest" , ["/Functional#eval" , ["/Functional#range" , ["/Functional#wrap" , 0   ] , ["/Functional#wrap" , 3   ]    ] , ["/bootstrap#list" , ["/bootstrap#number"  ]   ] , ["." , 0 , ["." , 1 , ["." , 2 , ["[]"  ]    ]    ]    ]     ]   ] , ["[]"  ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#insertExpression" , vars [0]  , vars [1]     ] , ["/bootstrap#procedure"  ]    ] , ["." , ["::" , vars [0]  , ["cpi#path"  ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#type"  ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "Path"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (5  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , [":-" , ["cpi#procedureCommand" , ["/Functional#insertExpression" , vars [0]  , vars [1]     ] , ["/bootstrap#doProc" , ["cpi#edit" , vars [0]  , ["::" , ["/Functional#unwrap" , vars [2]    ] , vars [1]     ] , ["[]"  ]     ]   ]    ] , ["/Functional#ancestorIsWrapper" , vars [0]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "Path"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "T"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , ["/bootstrap#contextMenuEntry" , ["::" , vars [0]  , vars [1]     ] , vars [2]  , vars [3]  , "Insert Expression" , ["/Functional#insertExpression" , vars [3]  , vars [1]     ]       ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "T"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [5]     ] , "Path"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#ancestorIsWrapper" , vars [0]    ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["cpi#path"  ]    ] , ["[]"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "Path"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (11  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/wrappers.ced" , [":-" , ["/Functional#ancestorIsWrapper" , ["cpi#path" , vars [0]  , vars [1]     ]   ] , ["," , ["/bootstrap#append" , vars [2]  , ["." , vars [3]  , vars [4]     ] , vars [1]  , ["/bootstrap#number"  ]      ] , ["cpi#termAtPath" , ["cpi#path" , vars [0]  , vars [2]     ] , ["::" , ["/Functional#wrap" , vars [5]    ] , ["/Functional#expr" , vars [6]    ]    ] , vars [7]      ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [8]     ] , "Resource"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [9]     ] , "Path"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [10]     ] , "Prefix"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/xmlFile.ced" , ["/bootstrap#signature" , ["::" , ["/Functional#generateXMLFile" , vars [0]  , vars [1]     ] , ["/bootstrap#procedure"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#string"  ]    ] , ["." , ["::" , vars [1]  , ["/html#xml"  ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "FileName"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "XML"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (6  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/xmlFile.ced" , [":-" , ["cpi#procedureCommand" , ["/Functional#generateXMLFile" , vars [0]  , vars [1]     ] , ["/bootstrap#doProc" , ["/bootstrap#generateFileForSet" , vars [0]  , ["/bootstrap#singleton" , vars [2]    ]    ]   ]    ] , ["/Functional#eval" , ["/Functional#plus" , ["/Functional#wrap" , "<?xml version=\"1.0\"?>\n"   ] , ["/html#toText" , ["::" , vars [1]  , ["/html#xml"  ]    ]   ]    ] , ["/bootstrap#string"  ] , vars [2]      ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "FileName"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [4]     ] , "XML"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [5]     ] , "XmlText"    ] , ["[]"  ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/Functional/xmlFile.ced" , ["/bootstrap#contextMenuEntry" , ["::" , vars [0]  , ["/html#xml"  ]    ] , vars [1]  , vars [2]  , "Generate XML File" , ["/Functional#generateXMLFile" , "gen.xml" , vars [0]     ]       ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [3]     ] , "XML"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/bootstrap/adapter.ced" , ["/bootstrap#signature" , ["::" , ["/bootstrap#adapter" , vars [0]  , vars [1]     ] , ["/bootstrap#statement"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#typedTerm"  ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#typedTerm"  ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "TTerm"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "WrappedTTerm"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/bootstrap/adapter.ced" , ["/bootstrap#projection" , ["::" , ["/bootstrap#adapter" , vars [0]  , vars [1]     ] , ["/bootstrap#statement"  ]    ] , ["/bootstrap#horiz" , ["." , ["/bootstrap#label" , "use"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [1]  , ["/bootstrap#typedTerm"  ]    ]   ] , ["." , ["/bootstrap#label" , "as adapter for"   ] , ["." , ["/bootstrap#vis" , ["::" , vars [0]  , ["/bootstrap#typedTerm"  ]    ]   ] , ["[]"  ]    ]    ]    ]    ]   ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "TTerm"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "WrappedTTerm"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/bootstrap/adapter.ced" , ["/bootstrap#signature" , ["::" , ["/bootstrap#checkAdapter" , vars [0]  , vars [1]     ] , ["/bootstrap#pred"  ]    ] , ["." , ["::" , vars [0]  , ["/bootstrap#typedTerm"  ]    ] , ["." , ["::" , vars [1]  , ["/bootstrap#typedTerm"  ]    ] , ["[]"  ]    ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "Y"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/bootstrap/adapter.ced" , [":-" , ["/bootstrap#checkAdapter" , vars [0]  , vars [0]     ] , ["builtin#true"  ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "TTerm"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (8  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/bootstrap/adapter.ced" , ["~>" , ["/bootstrap#adapter" , ["::" , vars [0]  , vars [1]     ] , ["::" , vars [2]  , vars [3]     ]    ] , [":-" , ["/bootstrap#checkAdapter" , ["::" , vars [0]  , vars [1]     ] , ["::" , vars [2]  , vars [3]     ]    ] , ["\\+" , ["=" , ["::" , vars [1]  , ["/bootstrap#type"  ]    ] , ["::" , vars [3]  , ["/bootstrap#type"  ]    ]    ]   ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [4]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [5]     ] , "T1"    ] , ["." , ["builtin#varName" , ["::" , vars [2]  , vars [6]     ] , "Y"    ] , ["." , ["builtin#varName" , ["::" , vars [3]  , vars [7]     ] , "T2"    ] , ["[]"  ]    ]    ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (4  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/bootstrap/adapter.ced" , ["/bootstrap#adapter" , ["::" , vars [0]  , vars [1]     ] , ["::" , ["::" , vars [0]  , vars [1]     ] , ["/bootstrap#typedTerm"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [2]     ] , "X"    ] , ["." , ["builtin#varName" , ["::" , vars [1]  , vars [3]     ] , "Type"    ] , ["[]"  ]    ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
logic . program  . add  (["builtin#loadedStatement"  ] , function (logic , term , next    ) { 
     var vars = Variable . variables  (2  )  ;  
     if ( logic . unify  (["builtin#loadedStatement" , "/home/boaz/cedalion/bootstrap/adapter.ced" , ["/bootstrap#adapter" , ["::" , vars [0]  , ["/bootstrap#pred"  ]    ] , ["::" , [":-" , vars [0]  , ["builtin#true"  ]    ] , ["/bootstrap#statement"  ]    ]    ] , ["." , ["builtin#varName" , ["::" , vars [0]  , vars [1]     ] , "Pred"    ] , ["[]"  ]    ]     ] , term   )  ) { 
     var g0   = function () { 
     logic . call  (["builtin#true"  ] , next   )  ;  


}
 ; 
logic . push  (g0    )  ; 
 


} else {
    // Empty
}
 



}
   )  ; 
