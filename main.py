from flask import Flask, render_template, send_from_directory

app = Flask(__name__)


@app.route('/')
def render_index():
    return render_template('index.html')


@app.route('/favicon.ico')
def static_from_root():
    return send_from_directory(app.static_folder, 'img/favicon.ico')


if __name__ == '__main__':
    app.run(debug=True)
