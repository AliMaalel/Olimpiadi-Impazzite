


 export class funzioni_js{


 new_form_other_page(name,action,button_text) {
    form_a=document.createElement("form");
    button=document.createElement("button");
    token_input=document.createElement("input");

    button_type=document.createAttribute("type");
    //button_onClick=document.createAttribute("onClick");

     form_name=document.createAttribute("name"); form_action=document.createAttribute("action");
     form_enctype=document.createAttribute("enctype");  form_method=document.createAttribute("method");
     token_type=document.createAttribute("type");token_name=document.createAttribute("name");token_value=document.createAttribute("value");

     form_name.value = name ; form_action.value = action ;
     form_enctype.value ="multipart/form-data" ;form_method.value = "POST";
     button_type.value="submit";
     
     //button_onClick.value=fun(n,e,c);

     token_type.value="hidden"; token_name.value="_token"; token_value.value= "<?php echo csrf_token()?>";

     button_text_var=document.createTextNode(button_text);button.appendChild(button_text_var); 

     form_a.setAttributeNode(form_name); form_a.setAttributeNode(form_method);
     form_a.setAttributeNode(form_action); form_a.setAttributeNode(form_enctype);
     button.setAttributeNode(button_type);
     //button.setAttributeNode(button_onClick);
     token_input.setAttributeNode(token_type);token_input.setAttributeNode(token_value);token_input.setAttributeNode(token_name);

     form_a.appendChild(button);
     form_a.appendChild(token_input);
    
     return form_a;
    }




    new_form_same_page(name,button_text,func) {
        form_a=document.createElement("form");
        button=document.createElement("button");
        
    
        button_type=document.createAttribute("type");
        button_onClick=document.createAttribute("onClick");
    
         form_name=document.createAttribute("name"); 
         form_enctype=document.createAttribute("enctype");  form_method=document.createAttribute("method");
         
         form_name.value = name ; 
         form_enctype.value ="multipart/form-data" ;form_method.value = "POST";
         button_type.value="submit";
         
         button_onClick.value=func;
         button_text_var=document.createTextNode(button_text);button.appendChild(button_text_var); 
    
         form_a.setAttributeNode(form_name); form_a.setAttributeNode(form_method); form_a.setAttributeNode(form_enctype);
         button.setAttributeNode(button_type);
         button.setAttributeNode(button_onClick);
         
    
         form_a.appendChild(button);
         
        
         return form_a;
        }


        new_input(type,name,label_text){

            label=document.createElement("label");
            input=document.createElement("input");
             
            label_id=document.createAttribute("id");
            input_type=document.createAttribute("type");
            input_name=document.createAttribute("name");
            
            label_id.value=name;
            input_type.value=type; input_name.value=name;
            
            label.setAttributeNode(label_id);
            input.setAttributeNode(input_type); input.setAttributeNode(input_name);
            
            label_text=document.createTextNode(label_text);
            label.appendChild(label_text);
            label.appendChild(input);
            
            return label;
            }

}
