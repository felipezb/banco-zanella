from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

client = MongoClient('mongodb://mongo:27017/')
db = client['banco-zanella']

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    # Adicione lógica de autenticação aqui, por exemplo, verificando no MongoDB
    user = db.users.find_one({'email': email, 'password': password})
    if user:
        return jsonify({"message": "Login bem-sucedido!"}), 200
    else:
        return jsonify({"message": "Credenciais inválidas"}), 401

@app.route('/extrato', methods=['GET'])
def extrato():
    # Adicione lógica para obter extrato
    return jsonify({"extrato": "Aqui estão suas transações"}), 200

@app.route('/deposito', methods=['POST'])
def deposito():
    data = request.get_json()
    valor = data.get('valor')
    # Adicione lógica para realizar depósito
    return jsonify({"message": f"Depósito de R${valor} realizado com sucesso!"}), 200

@app.route('/transferencia', methods=['POST'])
def transferencia():
    data = request.get_json()
    valor = data.get('valor')
    conta_destino = data.get('conta_destino')
    # Adicione lógica para realizar transferência
    return jsonify({"message": f"Transferência de R${valor} para a conta {conta_destino} realizada com sucesso!"}), 200

@app.route('/pix', methods=['POST'])
def pix():
    data = request.get_json()
    valor = data.get('valor')
    chave_pix = data.get('chave_pix')
    # Adicione lógica para realizar transferência via Pix
    return jsonify({"message": f"Transferência via Pix de R${valor} para a chave {chave_pix} realizada com sucesso!"}), 200

@app.route('/emprestimo', methods=['POST'])
def emprestimo():
    data = request.get_json()
    valor = data.get('valor')
    prazo = data.get('prazo')
    # Adicione lógica para solicitação de empréstimo
    return jsonify({"message": f"Empréstimo de R${valor} solicitado com sucesso para o prazo de {prazo} meses!"}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
